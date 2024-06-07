<template>
  <div class="mindmap-element">
    <div class="mindmap-element__header">
      <div class="mindmap-element__header__group">
        <div class="mindmap-element__header__icon">
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            fill="currentColor"
            class="a-s-fa-Ha-pa"
          >
            <g>
              <path
                d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"
                data-metatip="true"
              ></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </g>
          </svg>
        </div>
        <div class="mindmap-element__header__title">
          ドキュメント管理情報ドキュメント管理情報
        </div>
      </div>
      <div class="mindmap-element__header__select-icon">
        <svg
          viewBox="0 0 20 20"
          focusable="false"
          class="c-qd a-s-fa-Ha-pa"
          width="20px"
          height="20px"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h20v20H0V0z"></path>
          <path
            d="M10 6c.82 0 1.5-.68 1.5-1.5S10.82 3 10 3s-1.5.67-1.5 1.5S9.18 6 10 6zm0 5.5c.82 0 1.5-.68 1.5-1.5s-.68-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5zm0 5.5c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.68-1.5 1.5c0 .83.68 1.5 1.5 1.5z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="mindmap-element__image"></div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mindmap-element:hover {
  background-color: #f7f7f7;
}
.mindmap-element {
  box-sizing: border-box;
  margin: 1rem;
  height: 245px;
  width: 245px;
  background-color: #f0f4f9;
  border: 1px solid #f0f4f9;
  border-radius: 0.75rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  -webkit-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  &__header {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 2px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    &__icon {
      margin-right: 1rem;
    }
    &__title {
      max-width: 145px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__group {
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
    }
    &__select-icon {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    &__select-icon:hover {
      background-color: #eeeeee;
    }
  }
}
.mindmap-element__image {
  width: 225px;
  height: 190px;
  background-color: #fff;
}
</style>
