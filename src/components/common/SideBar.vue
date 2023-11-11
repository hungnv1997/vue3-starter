<template>
  <div class="left-side">
    <div
      class="side-wrapper"
      v-for="(navigation, index) in sideBar"
      :key="navigation.id + index"
    >
      <div class="side-title">{{ navigation.groupTitle }}</div>
      <div
        class="side-menu"
        v-for="(childNavigation, childIndex) in navigation.childs"
        :key="childNavigation.idPrefix + childIndex"
      >
        <router-link :to="childNavigation.routerLink">
          <component :is="childNavigation.icon" />{{ childNavigation.name }}
          <span class="notification-number updates">3</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardImageVue from "../images/DashboardImage.vue";
import GraphicDesignVue from "../images/GraphicDesign.vue";
import IllustrationsVue from "../images/Illustrations.vue";
import TutorialsVue from "../images/Tutorials.vue";
import SocialForumVue from "../images/SocialForum.vue";
import Icon3DARVue from "../images/Icon3DAR.vue";

export default {
  setup() {
    const sideBar = [
      {
        id: "parents",
        groupTitle: "Apps",
        childs: [
          {
            idPrefix: "childNav",
            name: "Dashboard",
            icon: DashboardImageVue,
            routerLink: "/",
          },
        ],
      },
      {
        id: "parents",
        groupTitle: "Learning",
        childs: [
          {
            idPrefix: "childNav",
            name: "Lessons",
            icon: GraphicDesignVue,
            routerLink: "/lessons",
          },
          {
            idPrefix: "childNav",
            name: "Import lessons",
            icon: IllustrationsVue,
            routerLink: "/import-lesson",
          },
        ],
      },
      {
        id: "parents",
        groupTitle: "Resource Links",
        childs: [
          {
            idPrefix: "childNav",
            name: "Tutorials",
            icon: TutorialsVue,
            routerLink: "/tutorials",
          },
          {
            idPrefix: "childNav",
            name: "Social Forum",
            icon: SocialForumVue,
            routerLink: "/social-forums",
          },
          {
            idPrefix: "childNav",
            name: "Trading lessons",
            icon: Icon3DARVue,
            routerLink: "/trading-lessons",
          },
        ],
      },
      {
        id: "parents",
        groupTitle: "Helps",
        childs: [
          {
            idPrefix: "childNav",
            name: "Questions",
            icon: DashboardImageVue,
            routerLink: "/questions",
          },
          {
            idPrefix: "childNav",
            name: "Online suport",
            icon: DashboardImageVue,
            routerLink: "/support",
          },
        ],
      },
    ];
    return { sideBar };
  },
};
</script>

<style lang="scss" scoped>
.left-side {
  flex-basis: 240px;
  border-right: 1px solid var(--border-color);
  padding: 26px;
  overflow: auto;
  flex-shrink: 0;
  @media screen and (max-width: 945px) {
    display: none;
  }
}
.side-wrapper + .side-wrapper {
  margin-top: 20px;
}

.side-title {
  color: var(--inactive-color);
  margin-bottom: 14px;
}

.side-menu {
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  a {
    text-decoration: none;
    color: var(--theme-color);
    display: flex;
    align-items: center;
    font-weight: 400;
    padding: 10px;
    font-size: 14px;
    border-radius: 6px;
    transition: 0.3s;
    &:hover {
      background-color: var(--hover-menu-bg);
    }
  }
  svg {
    width: 16px;
    margin-right: 8px;
  }
}
</style>
