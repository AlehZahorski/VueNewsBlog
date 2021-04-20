<template>
  <div>
    <mcv-top-bar />
    <router-view />
  </div>
</template>

<script>
import McvTopBar from '@/components/Topbar';
import {actionTypes} from '@/store/modules/auth';

export default {
  name: 'McvApp',
  components: {
    McvTopBar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>
