<template>
    <div class="quiz-container">
      <a-row :gutter="[24, 24]">
        <a-col :span="24">
          <div class="quiz-header">
            <h1>Quiz Platform</h1>
            <a-button type="primary" @click="showGeneratorModal = true">
              <template #icon><PlusOutlined /></template>
              Generate Quiz
            </a-button>
          
            <!-- Quiz Generator Modal -->
            <quiz-generator
              v-model="showGeneratorModal"
              @quiz-created="handleQuizCreated"
              @cancel="showGeneratorModal = false"
            />
          </div>
        </a-col>
  
        <!-- Search and Filters -->
        <a-col :span="24">
          <a-row :gutter="[16, 16]" class="controls-section">
            <a-col :span="12">
              <a-input-search
                v-model:value="searchQuery"
                placeholder="Search quizzes..."
                @search="handleSearch"
                :allow-clear="true"
              >
                <template #prefix>
                  <SearchOutlined />
                </template>
              </a-input-search>
            </a-col>
            <a-col :span="12" class="filter-section">
              <a-select
                v-model:value="selectedCategory"
                placeholder="Category"
                style="width: 120px"
                @change="handleFilters"
              >
                <a-select-option value="">All</a-select-option>
                <a-select-option v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </a-select-option>
              </a-select>
              <a-select
                v-model:value="selectedDifficulty"
                placeholder="Difficulty"
                style="width: 120px"
                @change="handleFilters"
              >
                <a-select-option value="">All</a-select-option>
                <a-select-option value="easy">Easy</a-select-option>
                <a-select-option value="medium">Medium</a-select-option>
                <a-select-option value="hard">Hard</a-select-option>
              </a-select>
              <a-select
                v-model:value="sortBy"
                placeholder="Sort by"
                style="width: 150px"
                @change="handleSort"
              >
                <a-select-option value="newest">Newest</a-select-option>
                <a-select-option value="popular">Most Popular</a-select-option>
                <a-select-option value="rating">Highest Rated</a-select-option>
              </a-select>
              <a-button @click="toggleView">
                <template #icon>
                  <AppstoreOutlined v-if="viewMode === 'list'" />
                  <UnorderedListOutlined v-else />
                </template>
                {{ viewMode === 'list' ? 'Grid View' : 'List View' }}
              </a-button>
            </a-col>
          </a-row>
        </a-col>
  
        <!-- Quiz List -->
        <a-col :span="24">
          <a-row :gutter="viewMode === 'grid' ? 16 : 0">
            <a-col
              v-for="quiz in filteredQuizzes"
              :key="quiz.id"
              :span="viewMode === 'grid' ? 8 : 24"
              :class="{ 'quiz-item': true, 'list-view': viewMode === 'list' }"
            >
              <a-card :bordered="true" class="quiz-card">
                <template #extra>
                  <a-tag :color="getDifficultyColor(quiz.difficulty)">
                    {{ quiz.difficulty }}
                  </a-tag>
                </template>
                <a-card-meta :title="quiz.title">
                  <template #description>
                    <div class="quiz-meta">
                      <p>{{ quiz.description }}</p>
                      <div class="quiz-stats">
                        <span><ClockCircleOutlined /> {{ quiz.duration }} mins</span>
                        <span><QuestionCircleOutlined /> {{ quiz.questionCount }} questions</span>
                        <span>
                          <a-rate :value="quiz.rating" disabled allow-half />
                          <span class="rating-count">({{ quiz.ratingCount }})</span>
                        </span>
                      </div>
                      <div class="quiz-tags">
                        <a-tag v-for="tag in quiz.tags" :key="tag">{{ tag }}</a-tag>
                      </div>
                    </div>
                  </template>
                </a-card-meta>
                <template #actions>
                  <a-button type="primary" @click="startQuiz(quiz.id)">Take Quiz</a-button>
                  <a-button @click="viewDetails(quiz.id)">View Details</a-button>
                </template>
              </a-card>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import {
    PlusOutlined,
    SearchOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
    ClockCircleOutlined,
    QuestionCircleOutlined
  } from '@ant-design/icons-vue'
  import QuizGenerator from '@/components/QuizGenerator.vue'
  
  const router = useRouter()
  const searchQuery = ref('')
  const selectedCategory = ref('')
  const selectedDifficulty = ref('')
  const sortBy = ref('newest')
  const viewMode = ref('grid')
  const showGeneratorModal = ref(false)
  
  // Mock data - replace with API calls in production
  const categories = ['Math', 'Science', 'History', 'Language']
  const quizzes = ref([
    {
      id: 1,
      title: 'Basic Mathematics',
      description: 'Test your knowledge of basic mathematical concepts',
      category: 'Math',
      difficulty: 'easy',
      duration: 15,
      questionCount: 10,
      rating: 4.5,
      ratingCount: 128,
      tags: ['algebra', 'arithmetic'],
      createdAt: '2025-03-30'
    },
    {
      id: 2,
      title: 'World History',
      description: 'Explore key events in world history',
      category: 'History',
      difficulty: 'medium',
      duration: 20,
      questionCount: 15,
      rating: 4.2,
      ratingCount: 95,
      tags: ['ancient', 'modern'],
      createdAt: '2025-03-29'
    }
    // Add more mock quizzes as needed
  ])
  
  const filteredQuizzes = computed(() => {
    let result = quizzes.value
  
    // Apply search
    if (searchQuery.value) {
      result = result.filter(quiz => 
        quiz.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        quiz.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
      )
    }
  
    // Apply category filter
    if (selectedCategory.value) {
      result = result.filter(quiz => quiz.category === selectedCategory.value)
    }
  
    // Apply difficulty filter
    if (selectedDifficulty.value) {
      result = result.filter(quiz => quiz.difficulty === selectedDifficulty.value)
    }
  
    // Apply sorting
    result = [...result].sort((a, b) => {
      switch (sortBy.value) {
        case 'popular':
          return b.ratingCount - a.ratingCount
        case 'rating':
          return b.rating - a.rating
        case 'newest':
        default:
          return new Date(b.createdAt) - new Date(a.createdAt)
      }
    })
  
    return result
  })
  
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'green'
      case 'medium': return 'blue'
      case 'hard': return 'red'
      default: return 'default'
    }
  }
  
  const handleSearch = () => {
    // Additional search logic if needed
  }
  
  const handleFilters = () => {
    // Additional filter logic if needed
  }
  
  const handleSort = () => {
    // Additional sort logic if needed
  }
  
  const toggleView = () => {
    viewMode.value = viewMode.value === 'grid' ? 'list' : 'grid'
  }
  
  const startQuiz = (quizId) => {
    router.push({ name: 'quiz-detail', params: { id: quizId }})
  }
  
  const viewDetails = (quizId) => {
    router.push({ name: 'quiz-detail', params: { id: quizId }, query: { view: 'details' }})
  }
  
  const handleQuizCreated = (quiz) => {
    // TODO: Add the new quiz to the list and refresh
    quizzes.value.unshift({
      id: quizzes.value.length + 1,
      title: quiz.title,
      description: quiz.description,
      category: quiz.options.category || 'General',
      difficulty: quiz.options.difficulty,
      duration: quiz.options.timeLimit,
      questionCount: quiz.questions.length,
      rating: 0,
      ratingCount: 0,
      tags: quiz.options.tags,
      createdAt: new Date().toISOString()
    })
  }
  </script>
  
  <style lang="scss" scoped>
  .quiz-container {
    padding: 24px;
  }
  
  .quiz-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  
    h1 {
      margin: 0;
    }
  }
  
  .controls-section {
    margin-bottom: 24px;
  }
  
  .filter-section {
    display: flex;
    gap: 16px;
    justify-content: flex-end;
  }
  
  .quiz-card {
    height: 100%;
    
    .quiz-meta {
      .quiz-stats {
        display: flex;
        gap: 16px;
        margin: 12px 0;
        color: rgba(0, 0, 0, 0.45);
      }
      
      .quiz-tags {
        margin-top: 12px;
      }
  
      .rating-count {
        margin-left: 8px;
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
  
  .quiz-item {
    margin-bottom: 16px;
  
    &.list-view {
      .quiz-card {
        ::v-deep .ant-card-actions {
          background: transparent;
          border-top: none;
          margin-top: 16px;
        }
      }
    }
  }
  </style>
  