<template>
  <a-layout-header class="header">
    <div class="header-container">
      <!-- Mobile Hamburger Menu -->
      <a-button
        v-if="isSmallScreen"
        class="hamburger-btn"
        type="text"
        @click="showDrawer"
      >
        <menu-outlined />
      </a-button>

      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/vue.svg" alt="Logo" />
      </div>

      <!-- Desktop/Tablet Navigation -->
      <a-menu
        v-if="!isSmallScreen"
        v-model:selectedKeys="selectedKeys"
        mode="horizontal"
        class="nav-menu"
      >
        <a-sub-menu key="learn">
          <template #icon><read-outlined /></template>
          <template #title>{{ !isMediumScreen ? 'Learn' : '' }}</template>
          <a-menu-item key="reading">Reading</a-menu-item>
          <a-menu-item key="writing">Writing</a-menu-item>
          <a-menu-item key="listening">Listening</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="practice">
          <template #icon><code-outlined /></template>
          <template #title>{{ !isMediumScreen ? 'Practice' : '' }}</template>
          <a-menu-item key="quizzes">Quizzes</a-menu-item>
          <a-menu-item key="speaking">Speaking</a-menu-item>
          <a-menu-item key="peer">Peer Review</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="progress">
          <template #icon><line-chart-outlined /></template>
          <template #title>{{ !isMediumScreen ? 'Progress' : '' }}</template>
          <a-menu-item key="dashboard">Dashboard</a-menu-item>
          <a-menu-item key="certificates">Certificates</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="community">
          <template #icon><team-outlined /></template>
          <template #title>{{ !isMediumScreen ? 'Community' : '' }}</template>
          <a-menu-item key="leaderboards">Leaderboards</a-menu-item>
          <a-menu-item key="challenges">Challenges</a-menu-item>
        </a-sub-menu>
      </a-menu>

      <!-- Right Section -->
      <div class="right-section">
        <!-- Search -->
        <div class="search-container">
          <a-input-search
            v-if="!isMediumScreen"
            placeholder="Search..."
            class="search-bar"
          />
          <a-button v-else type="text" @click="showSearch = true">
            <search-outlined />
          </a-button>
        </div>

        <!-- Notifications -->
        <a-badge count="5">
          <a-button type="text">
            <bell-outlined />
          </a-button>
        </a-badge>

        <!-- Points/Badges (Desktop only) -->
        <div v-if="!isMediumScreen" class="gamification">
          <a-tooltip title="Your Points">
            <trophy-outlined /> 1,234
          </a-tooltip>
        </div>

        <!-- User Avatar -->
        <a-dropdown>
          <a-avatar>
            <template #icon><user-outlined /></template>
          </a-avatar>
          <template #overlay>
            <a-menu>
              <a-menu-item key="profile">Profile</a-menu-item>
              <a-menu-item key="settings">Settings</a-menu-item>
              <a-menu-item v-if="isMediumScreen" key="points">Points: 1,234</a-menu-item>
              <a-menu-divider />
              <a-menu-item key="logout">Logout</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <a-drawer
      v-model:visible="drawerVisible"
      placement="left"
      :closable="false"
      width="250"
    >
      <a-menu mode="inline">
        <a-sub-menu key="learn">
          <template #icon><read-outlined /></template>
          <template #title>Learn</template>
          <a-menu-item key="reading">Reading</a-menu-item>
          <a-menu-item key="writing">Writing</a-menu-item>
          <a-menu-item key="listening">Listening</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="practice">
          <template #icon><code-outlined /></template>
          <template #title>Practice</template>
          <a-menu-item key="quizzes">Quizzes</a-menu-item>
          <a-menu-item key="speaking">Speaking</a-menu-item>
          <a-menu-item key="peer">Peer Review</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="progress">
          <template #icon><line-chart-outlined /></template>
          <template #title>Progress</template>
          <a-menu-item key="dashboard">Dashboard</a-menu-item>
          <a-menu-item key="certificates">Certificates</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="community">
          <template #icon><team-outlined /></template>
          <template #title>Community</template>
          <a-menu-item key="leaderboards">Leaderboards</a-menu-item>
          <a-menu-item key="challenges">Challenges</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-drawer>

    <!-- Search Overlay (Tablet/Mobile) -->
    <a-modal
      v-model:visible="showSearch"
      title="Search"
      :footer="null"
      width="100%"
      style="top: 0"
      :closable="true"
    >
      <a-input-search placeholder="Search..." size="large" />
    </a-modal>
  </a-layout-header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import {
  MenuOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  ReadOutlined,
  CodeOutlined,
  LineChartOutlined,
  TeamOutlined,
  TrophyOutlined,
} from '@ant-design/icons-vue';

const windowWidth = ref(window.innerWidth);
const selectedKeys = ref(['learn']);
const drawerVisible = ref(false);
const showSearch = ref(false);

const isSmallScreen = computed(() => windowWidth.value < 768);
const isMediumScreen = computed(() => windowWidth.value < 992);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const showDrawer = () => {
  drawerVisible.value = true;
};
</script>

<style scoped>
.header {
  padding: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-bottom: #d9d9d9 1px solid;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 40px;
  height: 40px;
  margin-right: 24px;
  display: flex;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.nav-menu {
  flex: 1;
  background: transparent;
  border: none;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-container {
  display: flex;
  @media (min-width: 992px) {
    width: 200px;
  }
}

.search-bar {
  width: 100%;
}

.gamification {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hamburger-btn {
  margin-right: 16px;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .header-container {
    padding: 0 12px;
  }

  .nav-menu :deep(.ant-menu-title-content) {
    display: none;
  }
}

@media (max-width: 767px) {
  .header-container {
    padding: 0 8px;
  }
}
</style>