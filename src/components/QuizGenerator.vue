<template>
  <a-modal
    :open="modelValue"
    title="Quiz Generator"
    :width="1200"
    :bodyStyle="{ maxHeight: '80vh', overflow: 'auto' }"
    :maskClosable="false"
    @cancel="handleCancel"
    :footer="null"
    class="quiz-generator-modal"
    :destroyOnClose="true"
  >
    <div class="quiz-generator">
      <div class="generator-header">
        <h3>Create quizzes from text input</h3>
        <a-space>
          <a-button @click="resetForm">
            <template #icon><ClearOutlined /></template>
            Clear
          </a-button>
          <a-button
            type="primary"
            @click="generateQuiz"
            :loading="isGenerating"
            :disabled="!sourceText.trim()"
          >
            <template #icon><ThunderboltOutlined /></template>
            Generate Quiz
          </a-button>
        </a-space>
      </div>

      <!-- Input Section -->
      <a-card v-if="!showPreview" class="generator-card">
        <a-tabs v-model:activeKey="activeTab">
          <!-- Direct Text Input -->
          <a-tab-pane key="text" tab="Enter Text">
            <a-form-item
              label="Source Text"
              help="Paste or type the text from which you want to generate questions (max 5,000 chars)"
            >
              <a-textarea
                v-model:value="sourceText"
                :rows="8"
                placeholder="Enter your text here..."
                :maxlength="5000"
                show-count
              />
            </a-form-item>
          </a-tab-pane>

          <!-- File Upload -->
          <a-tab-pane key="file" tab="Upload File">
            <a-upload
              accept=".txt,.doc,.docx,.pdf"
              :customRequest="handleFileUpload"
              :show-upload-list="true"
              :maxCount="1"
            >
              <a-button>
                <template #icon><UploadOutlined /></template>
                Upload Document
              </a-button>
              <template #itemRender="{ file }">
                <a-card size="small" class="upload-card">
                  <template #title>
                    <FileTextOutlined /> {{ file.name }}
                  </template>
                  <template #extra>
                    <a-button type="link" danger @click="() => handleRemoveFile(file)">
                      Remove
                    </a-button>
                  </template>
                  <p>{{ file.status === 'done' ? 'File processed successfully' : 'Processing...' }}</p>
                </a-card>
              </template>
            </a-upload>
          </a-tab-pane>
        </a-tabs>

        <a-divider />

        <!-- Generation Settings -->
        <div class="settings-section">
          <h3>Quiz Settings</h3>
          <a-form :model="quizOptions" layout="vertical">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item label="Question Types">
                  <a-checkbox-group v-model:value="quizOptions.questionTypes">
                    <a-checkbox value="mcq">Multiple Choice</a-checkbox>
                    <a-checkbox value="true_false">True/False</a-checkbox>
                    <a-checkbox value="short_answer">Short Answer</a-checkbox>
                  </a-checkbox-group>
                </a-form-item>
              </a-col>

              <a-col :span="8">
                <a-form-item label="Number of Questions">
                  <a-slider
                    v-model:value="quizOptions.questionCount"
                    :min="5"
                    :max="20"
                    :marks="{
                      5: '5',
                      10: '10',
                      15: '15',
                      20: '20'
                    }"
                  />
                </a-form-item>
              </a-col>

              <a-col :span="8">
                <a-form-item label="Time Limit (minutes)">
                  <a-input-number
                    v-model:value="quizOptions.timeLimit"
                    :min="5"
                    :max="120"
                    :step="5"
                  />
                </a-form-item>
              </a-col>
            </a-row>

            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item label="Difficulty">
                  <a-radio-group v-model:value="quizOptions.difficulty" button-style="solid">
                    <a-radio-button value="easy">Easy</a-radio-button>
                    <a-radio-button value="medium">Medium</a-radio-button>
                    <a-radio-button value="hard">Hard</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>

              <a-col :span="8">
                <a-form-item label="Category">
                  <a-select
                    v-model:value="quizOptions.category"
                    show-search
                    placeholder="Select a category"
                  >
                    <a-select-option v-for="cat in categories" :key="cat" :value="cat">
                      {{ cat }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :span="8">
                <a-form-item label="Tags">
                  <a-select
                    v-model:value="quizOptions.tags"
                    mode="tags"
                    placeholder="Add relevant tags"
                    :token-separators="[',']"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </div>
      </a-card>

      <!-- Preview & Edit Section -->
      <template v-else>
        <a-card class="preview-card">
          <template #title>
            <div class="preview-header">
              <h2>Generated Quiz Preview</h2>
              <a-space>
                <a-button @click="showPreview = false">
                  Back to Editor
                </a-button>
                <a-button type="primary" @click="saveQuiz">
                  Save & Publish
                </a-button>
              </a-space>
            </div>
          </template>

          <a-form :model="quizMetadata" layout="vertical">
            <a-form-item label="Quiz Title" required>
              <a-input v-model:value="quizMetadata.title" placeholder="Enter a title for your quiz" />
            </a-form-item>
            
            <a-form-item label="Description" required>
              <a-textarea
                v-model:value="quizMetadata.description"
                placeholder="Describe what this quiz is about"
                :rows="3"
              />
            </a-form-item>
          </a-form>

          <a-divider />

          <div class="questions-preview">
            <div v-for="(question, index) in generatedQuestions" :key="index" class="question-item">
              <a-card size="small" :title="`Question ${index + 1}`">
                <template #extra>
                  <a-space>
                    <a-button size="small" @click="editQuestion(index)">
                      <template #icon><EditOutlined /></template>
                    </a-button>
                    <a-button size="small" danger @click="removeQuestion(index)">
                      <template #icon><DeleteOutlined /></template>
                    </a-button>
                  </a-space>
                </template>

                <a-form layout="vertical">
                  <a-form-item label="Question Text">
                    <a-textarea
                      v-model:value="question.question"
                      :rows="2"
                      :disabled="!question.isEditing"
                    />
                  </a-form-item>

                  <template v-if="question.type === 'mcq'">
                    <a-form-item label="Options">
                      <a-radio-group v-model:value="question.correctAnswer" :disabled="!question.isEditing">
                        <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="choice-item">
                          <a-radio :value="choice">
                            <a-input
                              v-model:value="question.choices[choiceIndex]"
                              :disabled="!question.isEditing"
                            />
                          </a-radio>
                        </div>
                      </a-radio-group>
                    </a-form-item>
                  </template>

                  <template v-else-if="question.type === 'true_false'">
                    <a-form-item label="Correct Answer">
                      <a-switch
                        v-model:checked="question.correctAnswer"
                        :disabled="!question.isEditing"
                        :checkedChildren="'True'"
                        :unCheckedChildren="'False'"
                      />
                    </a-form-item>
                  </template>

                  <template v-else>
                    <a-form-item label="Correct Answer">
                      <a-input
                        v-model:value="question.correctAnswer"
                        :disabled="!question.isEditing"
                      />
                    </a-form-item>
                  </template>

                  <a-form-item label="Explanation">
                    <a-textarea
                      v-model:value="question.explanation"
                      :rows="2"
                      :disabled="!question.isEditing"
                      placeholder="Explain why this is the correct answer"
                    />
                  </a-form-item>
                </a-form>
              </a-card>
            </div>
          </div>
        </a-card>
      </template>
    </div>

    <!-- Processing Modal -->
    <a-modal
      v-model:open="showProcessingModal"
      title="Generating Quiz"
      :closable="false"
      :footer="null"
    >
      <div class="processing-content">
        <a-spin />
        <p>{{ processingStatus }}</p>
        <a-progress :percent="processingProgress" />
      </div>
    </a-modal>

    <!-- Save Modal -->
    <a-modal
      v-model:open="showSaveModal"
      title="Save Quiz"
      @ok="publishQuiz"
      okText="Publish"
    >
      <a-alert
        message="Review your quiz"
        description="Please review all questions and make sure they are accurate before publishing."
        type="info"
        show-icon
      />
      <div class="save-options">
        <a-checkbox v-model:checked="saveOptions.isDraft">Save as draft</a-checkbox>
        <a-checkbox v-model:checked="saveOptions.requireApproval">Submit for approval</a-checkbox>
      </div>
    </a-modal>
  </a-modal>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue'
import { message } from 'ant-design-vue'
import {
  UploadOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
  ClearOutlined,
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons-vue'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'quiz-created', 'cancel'])

const handleCancel = () => {
  emit('update:modelValue', false)
  emit('cancel')
  resetForm()
}

const activeTab = ref('text')
const sourceText = ref('')
const isGenerating = ref(false)
const showProcessingModal = ref(false)
const showPreview = ref(false)
const showSaveModal = ref(false)
const processingProgress = ref(0)
const processingStatus = ref('')

// Quiz generation options
const quizOptions = reactive({
  questionTypes: ['mcq', 'true_false'],
  questionCount: 10,
  timeLimit: 30,
  difficulty: 'medium',
  category: '',
  tags: []
})

// Available categories
const categories = [
  'Math',
  'Science',
  'History',
  'Language',
  'Technology',
  'Arts',
  'General Knowledge'
]

// Generated quiz data
const quizMetadata = reactive({
  title: '',
  description: '',
})

const saveOptions = reactive({
  isDraft: false,
  requireApproval: true
})

const generatedQuestions = ref([])

// File upload handling
const handleFileUpload = async ({ file, onSuccess, onError }) => {
  try {
    const reader = new FileReader()
    reader.onload = (e) => {
      sourceText.value = e.target.result
      onSuccess()
    }
    reader.onerror = () => {
      onError()
      message.error('Failed to read file')
    }
    reader.readAsText(file)
  } catch (error) {
    onError()
    message.error('Failed to process file')
  }
}

const handleRemoveFile = () => {
  sourceText.value = ''
}

// Quiz generation
const generateQuiz = async () => {
  if (!sourceText.value.trim()) {
    message.error('Please enter some text first')
    return
  }

  if (!quizOptions.questionTypes.length) {
    message.error('Please select at least one question type')
    return
  }

  isGenerating.value = true
  showProcessingModal.value = true

  try {
    // Simulate processing steps
    const steps = [
      'Analyzing text...',
      'Identifying key concepts...',
      'Generating questions...',
      'Creating answer options...',
      'Finalizing quiz...'
    ]

    for (let i = 0; i < steps.length; i++) {
      processingStatus.value = steps[i]
      await new Promise(resolve => setTimeout(resolve, 1000))
      processingProgress.value = (i + 1) * 20
    }

    // Mock question generation
    generatedQuestions.value = generateMockQuestions()
    
    showProcessingModal.value = false
    showPreview.value = true
    message.success('Quiz generated successfully!')
  } catch (error) {
    message.error('Failed to generate quiz')
  } finally {
    isGenerating.value = false
    processingProgress.value = 0
  }
}

const generateMockQuestions = () => {
  // This would be replaced with actual AI-generated questions
  return Array(quizOptions.questionCount).fill(null).map((_, index) => ({
    type: quizOptions.questionTypes[index % quizOptions.questionTypes.length],
    question: `Sample question ${index + 1} generated from the text?`,
    choices: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option A',
    explanation: 'This is the explanation for the correct answer.',
    isEditing: false
  }))
}

// Question editing
const editQuestion = (index) => {
  generatedQuestions.value[index].isEditing = true
}

const removeQuestion = (index) => {
  generatedQuestions.value = generatedQuestions.value.filter((_, i) => i !== index)
}

// Quiz saving
const saveQuiz = () => {
  if (!quizMetadata.title.trim()) {
    message.warning('Please enter a quiz title')
    return
  }
  if (!quizMetadata.description.trim()) {
    message.warning('Please enter a quiz description')
    return
  }
  showSaveModal.value = true
}

const publishQuiz = async () => {
  try {
    emit('quiz-created', {
      title: quizMetadata.title,
      description: quizMetadata.description,
      questions: generatedQuestions.value,
      options: quizOptions
    })
    message.success('Quiz saved successfully!')
    emit('update:modelValue', false)
    resetForm()
    showSaveModal.value = false
  } catch (error) {
    message.error('Failed to save quiz')
  }
}

const resetForm = () => {
  sourceText.value = ''
  quizOptions.questionTypes = ['mcq', 'true_false']
  quizOptions.questionCount = 10
  quizOptions.timeLimit = 30
  quizOptions.difficulty = 'medium'
  quizOptions.category = ''
  quizOptions.tags = []
  quizMetadata.title = ''
  quizMetadata.description = ''
  generatedQuestions.value = []
  showPreview.value = false
}
</script>

<style lang="scss" scoped>
.quiz-generator {
  .generator-header {
    text-align: center;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h3 {
      margin: 0;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}

.generator-card,
.preview-card {
  margin-top: 24px;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.settings-section {
  h3 {
    margin-bottom: 24px;
  }
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    margin: 0;
  }
}

.questions-preview {
  .question-item {
    margin-bottom: 16px;
  }
}

.choice-item {
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.upload-card {
  margin: 8px 0;
}

.processing-content {
  text-align: center;
  padding: 24px;
}

.save-options {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

:deep(.quiz-generator-modal) {
  .ant-modal-content {
    backdrop-filter: blur(16px);
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .ant-modal-header {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .ant-modal-body {
    padding: 24px;
  }

  .ant-modal-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
}

// Modal transition animations
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
