<template>
  <div class="quiz-detail-container">
    <a-row>
      <a-col :span="18" :offset="3">
        <!-- Quiz Information View -->
        <template v-if="!isActive && !showResults">
          <a-page-header
            :title="quiz.title"
            @back="goBack"
            class="quiz-header"
          >
            <template #tags>
              <a-tag :color="getDifficultyColor(quiz.difficulty)">
                {{ quiz.difficulty }}
              </a-tag>
            </template>
            <template #extra>
              <a-button type="primary" @click="startQuiz">
                Start Quiz
              </a-button>
            </template>
          </a-page-header>

          <a-card :bordered="false" class="quiz-info-card">
            <a-row :gutter="24">
              <a-col :span="16">
                <h2>About this Quiz</h2>
                <p>{{ quiz.description }}</p>
                
                <div class="quiz-stats">
                  <a-descriptions>
                    <a-descriptions-item label="Time Limit">
                      {{ quiz.duration }} minutes
                    </a-descriptions-item>
                    <a-descriptions-item label="Questions">
                      {{ quiz.questionCount }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Attempts">
                      {{ quiz.attempts }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Category">
                      {{ quiz.category }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Created By">
                      {{ quiz.creator }}
                    </a-descriptions-item>
                    <a-descriptions-item label="Last Updated">
                      {{ formatDate(quiz.updatedAt) }}
                    </a-descriptions-item>
                  </a-descriptions>
                </div>

                <div class="quiz-tags">
                  <h3>Topics</h3>
                  <div>
                    <a-tag v-for="tag in quiz.tags" :key="tag">
                      {{ tag }}
                    </a-tag>
                  </div>
                </div>
              </a-col>
              
              <a-col :span="8">
                <div class="quiz-statistics">
                  <h3>Statistics</h3>
                  <a-statistic title="Average Score" :value="quiz.averageScore + '%'" />
                  <a-statistic title="Total Attempts" :value="quiz.totalAttempts" />
                  <div class="rating-section">
                    <span>Rating</span>
                    <a-rate :value="quiz.rating" disabled allow-half />
                    <span class="rating-count">({{ quiz.ratingCount }})</span>
                  </div>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </template>

        <!-- Active Quiz View -->
        <template v-if="isActive">
          <a-card :bordered="false" :title="quiz.title">
            <template #extra>
              <a-button type="primary" danger @click="confirmEndQuiz">
                End Quiz
              </a-button>
            </template>

            <div class="question-section">
              <a-progress 
                :percent="(currentQuestionIndex + 1) / quiz.questions.length * 100" 
                :format="progressFormat"
              />
              
              <div class="timer" v-if="timeRemaining > 0">
                Time Remaining: {{ formatTime(timeRemaining) }}
              </div>

              <div class="question-content">
                <h2>Question {{ currentQuestionIndex + 1 }}</h2>
                <p class="question-text">{{ currentQuestion.question }}</p>

                <a-radio-group
                  v-if="currentQuestion.type === 'mcq'"
                  v-model:value="selectedAnswer"
                  class="answer-list"
                >
                  <a-radio v-for="(choice, index) in currentQuestion.choices" 
                          :key="index" 
                          :value="choice"
                          class="answer-option"
                  >
                    {{ choice }}
                  </a-radio>
                </a-radio-group>

                <div v-else-if="currentQuestion.type === 'true_false'" class="true-false-options">
                  <a-radio-group v-model:value="selectedAnswer" button-style="solid">
                    <a-radio-button value="true">True</a-radio-button>
                    <a-radio-button value="false">False</a-radio-button>
                  </a-radio-group>
                </div>

                <a-input
                  v-else-if="currentQuestion.type === 'short_answer'"
                  v-model:value="selectedAnswer"
                  placeholder="Type your answer here..."
                  :maxLength="100"
                  show-count
                />
              </div>

              <div class="actions-section">
                <a-space>
                  <a-button 
                    @click="previousQuestion" 
                    :disabled="currentQuestionIndex === 0"
                  >
                    Previous
                  </a-button>
                  <a-button 
                    type="primary" 
                    @click="nextQuestion"
                    :disabled="!selectedAnswer"
                  >
                    {{ currentQuestionIndex === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next' }}
                  </a-button>
                </a-space>
              </div>
            </div>
          </a-card>
        </template>

        <!-- Results View -->
        <template v-if="showResults">
          <a-card title="Quiz Results" :bordered="false">
            <a-result
              :status="getResultStatus(score, total)"
              :title="getResultTitle(score, total)"
              :sub-title="`You scored ${score} out of ${total} (${Math.round(score/total * 100)}%)`"
            >
              <template #extra>
                <a-space>
                  <a-button type="primary" @click="retakeQuiz">
                    Try Again
                  </a-button>
                  <a-button @click="goBack">
                    Back to Quizzes
                  </a-button>
                </a-space>
              </template>

              <div class="results-breakdown">
                <h3>Performance Breakdown</h3>
                <a-timeline>
                  <a-timeline-item 
                    v-for="(answer, index) in userAnswers" 
                    :key="index"
                    :color="answer.isCorrect ? 'green' : 'red'"
                  >
                    <h4>Question {{ index + 1 }}</h4>
                    <p>Your answer: {{ answer.userAnswer }}</p>
                    <p>Correct answer: {{ answer.correctAnswer }}</p>
                    <p v-if="answer.explanation" class="answer-explanation">
                      {{ answer.explanation }}
                    </p>
                  </a-timeline-item>
                </a-timeline>
              </div>
            </a-result>
          </a-card>
        </template>
      </a-col>
    </a-row>

    <!-- Confirmation Modal -->
    <a-modal
      v-model:visible="showConfirmEndModal"
      title="End Quiz?"
      @ok="endQuiz"
      okText="Yes, end quiz"
      cancelText="No, continue"
    >
      <p>Are you sure you want to end this quiz? Your progress will be saved and scored.</p>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// State
const isActive = ref(false)
const showResults = ref(false)
const showConfirmEndModal = ref(false)
const currentQuestionIndex = ref(0)
const selectedAnswer = ref('')
const timeRemaining = ref(0)
const userAnswers = ref([])
const timer = ref(null)

// Mock quiz data - replace with API call
const quiz = ref({
  id: 1,
  title: 'Basic Mathematics',
  description: 'Test your knowledge of basic mathematical concepts including arithmetic, algebra, and geometry.',
  category: 'Math',
  difficulty: 'medium',
  duration: 15, // minutes
  questionCount: 10,
  attempts: 'Unlimited',
  creator: 'Math Department',
  updatedAt: '2025-03-30T10:00:00Z',
  averageScore: 75,
  totalAttempts: 1234,
  rating: 4.5,
  ratingCount: 128,
  tags: ['algebra', 'arithmetic', 'geometry'],
  questions: [
    {
      type: 'mcq',
      question: 'What is 2 + 2?',
      choices: ['3', '4', '5', '6'],
      correctAnswer: '4',
      explanation: '2 + 2 = 4 is a basic arithmetic equation'
    },
    // Add more questions
  ]
})

// Computed
const currentQuestion = computed(() => 
  quiz.value.questions[currentQuestionIndex.value] || {}
)

const score = computed(() => 
  userAnswers.value.filter(a => a.isCorrect).length
)

const total = computed(() => quiz.value.questions.length)

// Methods
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'easy': return 'green'
    case 'medium': return 'blue'
    case 'hard': return 'red'
    default: return 'default'
  }
}
const progressFormat = (percent) => {
  // Use percent for additional formatting if needed
  return `${currentQuestionIndex.value + 1}/${quiz.value.questions.length} (${Math.round(percent)}%)`
}
  `${currentQuestionIndex.value + 1}/${quiz.value.questions.length}`

const getResultStatus = (score, total) => {
  const percentage = (score / total) * 100
  if (percentage >= 80) return 'success'
  if (percentage >= 60) return 'warning'
  return 'error'
}

const getResultTitle = (score, total) => {
  const percentage = (score / total) * 100
  if (percentage >= 80) return 'Excellent!'
  if (percentage >= 60) return 'Good Job!'
  return 'Keep Practicing!'
}

const startQuiz = () => {
  isActive.value = true
  showResults.value = false
  currentQuestionIndex.value = 0
  selectedAnswer.value = ''
  userAnswers.value = []
  timeRemaining.value = quiz.value.duration * 60 // convert minutes to seconds
  startTimer()
}

const startTimer = () => {
  timer.value = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--
    } else {
      endQuiz()
    }
  }, 1000)
}

const nextQuestion = () => {
  userAnswers.value.push({
    userAnswer: selectedAnswer.value,
    correctAnswer: currentQuestion.value.correctAnswer,
    isCorrect: selectedAnswer.value === currentQuestion.value.correctAnswer,
    explanation: currentQuestion.value.explanation
  })

  if (currentQuestionIndex.value < quiz.value.questions.length - 1) {
    currentQuestionIndex.value++
    selectedAnswer.value = ''
  } else {
    endQuiz()
  }
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    selectedAnswer.value = userAnswers.value[currentQuestionIndex.value]?.userAnswer || ''
  }
}

const confirmEndQuiz = () => {
  showConfirmEndModal.value = true
}

const endQuiz = () => {
  isActive.value = false
  showResults.value = true
  showConfirmEndModal.value = false
  if (timer.value) {
    clearInterval(timer.value)
  }
}

const retakeQuiz = () => {
  startQuiz()
}

const goBack = () => {
  router.push({ name: 'quiz' })
}

// Lifecycle
onMounted(() => {
  if (route.query.view !== 'details') {
    startQuiz()
  }
})

onUnmounted(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})
</script>

<style lang="scss" scoped>
.quiz-detail-container {
  padding: 24px;
}

.quiz-header {
  margin-bottom: 24px;
  background: #fff;
}

.quiz-info-card {
  .quiz-stats {
    margin: 24px 0;
  }

  .quiz-tags {
    margin-top: 24px;
  }
}

.quiz-statistics {
  padding: 24px;
  background: #f5f5f5;
  border-radius: 4px;

  .rating-section {
    margin-top: 16px;
    
    .rating-count {
      margin-left: 8px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}

.question-section {
  .timer {
    text-align: center;
    font-size: 1.2em;
    margin: 16px 0;
  }

  .question-content {
    margin: 24px 0;

    .question-text {
      font-size: 1.2em;
      margin: 16px 0;
    }
  }
}

.answer-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.answer-option {
  margin: 8px 0;
  padding: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;

  &:hover {
    border-color: #1890ff;
  }
}

.actions-section {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
}

.true-false-options {
  margin: 16px 0;
}

.results-breakdown {
  margin-top: 32px;
  text-align: left;

  .answer-explanation {
    font-style: italic;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>