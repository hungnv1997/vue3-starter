<template>
  <a-layout-footer class="footer">
    <div class="footer-container">
      <!-- Desktop and Tablet View -->
      <div v-if="!isSmallScreen" class="footer-content">
        <div class="footer-section">
          <h4>Learn</h4>
          <a-menu mode="vertical" class="footer-menu">
            <a-menu-item key="reading">Reading</a-menu-item>
            <a-menu-item key="writing">Writing</a-menu-item>
            <a-menu-item key="listening">Listening</a-menu-item>
          </a-menu>
        </div>

        <div class="footer-section">
          <h4>Practice</h4>
          <a-menu mode="vertical" class="footer-menu">
            <a-menu-item key="quizzes">Quizzes</a-menu-item>
            <a-menu-item key="speaking">Speaking</a-menu-item>
            <a-menu-item key="peer">Peer Review</a-menu-item>
          </a-menu>
        </div>

        <div class="footer-section">
          <h4>Community</h4>
          <a-menu mode="vertical" class="footer-menu">
            <a-menu-item key="leaderboard">
              <trophy-outlined /> Leaderboard
            </a-menu-item>
            <a-menu-item key="challenges">
              <fire-outlined /> Daily Challenges
            </a-menu-item>
            <a-menu-item key="events">
              <calendar-outlined /> Events
            </a-menu-item>
          </a-menu>
        </div>

        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a-button type="text">
              <template #icon><facebook-outlined /></template>
            </a-button>
            <a-button type="text">
              <template #icon><twitter-outlined /></template>
            </a-button>
            <a-button type="text">
              <template #icon><instagram-outlined /></template>
            </a-button>
            <a-button type="text">
              <template #icon><youtube-outlined /></template>
            </a-button>
          </div>
          <div class="contact-info">
            <mail-outlined /> support@example.com
          </div>
        </div>
      </div>

      <!-- Mobile View -->
      <div v-else class="footer-mobile">
        <a-collapse>
          <a-collapse-panel key="1" header="Learn">
            <a-menu mode="inline" class="footer-menu-mobile">
              <a-menu-item key="reading">Reading</a-menu-item>
              <a-menu-item key="writing">Writing</a-menu-item>
              <a-menu-item key="listening">Listening</a-menu-item>
            </a-menu>
          </a-collapse-panel>

          <a-collapse-panel key="2" header="Practice">
            <a-menu mode="inline" class="footer-menu-mobile">
              <a-menu-item key="quizzes">Quizzes</a-menu-item>
              <a-menu-item key="speaking">Speaking</a-menu-item>
              <a-menu-item key="peer">Peer Review</a-menu-item>
            </a-menu>
          </a-collapse-panel>

          <a-collapse-panel key="3" header="Community">
            <a-menu mode="inline" class="footer-menu-mobile">
              <a-menu-item key="leaderboard">
                <trophy-outlined /> Leaderboard
              </a-menu-item>
              <a-menu-item key="challenges">
                <fire-outlined /> Daily Challenges
              </a-menu-item>
              <a-menu-item key="events">
                <calendar-outlined /> Events
              </a-menu-item>
            </a-menu>
          </a-collapse-panel>
        </a-collapse>

        <div class="social-links-mobile">
          <a-button type="text">
            <template #icon><facebook-outlined /></template>
          </a-button>
          <a-button type="text">
            <template #icon><twitter-outlined /></template>
          </a-button>
          <a-button type="text">
            <template #icon><instagram-outlined /></template>
          </a-button>
          <a-button type="text">
            <template #icon><youtube-outlined /></template>
          </a-button>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="copyright">
        <div class="copyright-content">
          <p>&copy; {{ currentYear }} Learning Platform. All rights reserved.</p>
          <div class="legal-links">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </a-layout-footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TrophyOutlined,
  FireOutlined,
  CalendarOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';

const windowWidth = ref(window.innerWidth);
const currentYear = new Date().getFullYear();

const isSmallScreen = computed(() => windowWidth.value < 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.footer {
  border-top: #d9d9d9 1px solid;
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  padding: 40px 0 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.footer-section h4 {
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 16px;
  font-size: 18px;
}

.footer-menu {
  background: transparent;
  border: none;
}

.footer-menu :deep(.ant-menu-item) {
  color: rgba(0, 0, 0, 0.65);
  padding: 4px 0;
}

.footer-menu :deep(.ant-menu-item:hover) {
  color: #1890ff;
}

.social-links {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.social-links :deep(.anticon) {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.45);
}

.social-links :deep(.ant-btn:hover .anticon) {
  color: #1890ff;
}

.contact-info {
  color: rgba(0, 0, 0, 0.65);
}

/* Mobile Styles */
.footer-mobile {
  padding-bottom: 24px;
}

.footer-mobile :deep(.ant-collapse) {
  background: transparent;
  border: none;
}

.footer-mobile :deep(.ant-collapse-header) {
  color: rgba(0, 0, 0, 0.85) !important;
  font-size: 16px;
  font-weight: 500;
}

.footer-menu-mobile {
  background: transparent;
  border: none;
}

.social-links-mobile {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 24px;
}

/* Copyright Section */
.copyright {
  margin-top: 40px;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
}

.legal-links {
  display: flex;
  gap: 24px;
}

.legal-links a {
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
}

.legal-links a:hover {
  color: #1890ff;
}

/* Tablet Responsive */
@media (max-width: 991px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Mobile Responsive */
@media (max-width: 767px) {
  .footer {
    padding: 24px 0 0;
  }

  .copyright-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>