<template>
  <nav class='navbar navbar-light'></nav>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'McvTopBar',
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
};
</script>

