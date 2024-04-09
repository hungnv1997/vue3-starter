<template>
  <!-- <div v-if="userIsAuthenticated">
  </div> -->
  <AuthorizedHeader />
  <!-- <div>
    <UnauthorizedHeader />
  </div> -->
</template>

<script>
import AuthorizedHeader from "./AuthorizedHeader.vue";
// import UnauthorizedHeader from './UnauthorizedHeader.vue';
// import { actions } from '../../helpers/constants';

export default {
  name: "SiteHeader",
  components: {
    AuthorizedHeader,
    // UnauthorizedHeader,
  },
  methods: {
    onLogOut() {
      // this.$store.dispatch(actions.logout);
    },
  },
};
</script>
