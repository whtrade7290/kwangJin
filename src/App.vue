<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
    <div class="relative">
      <AppFooter class="app-footer"></AppFooter>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&family=Orbit&display=swap');
body {
  font-family: 'Jua', sans-serif;
  font-family: 'Orbit', sans-serif;
}
</style>
