<template>
  <sub-menu :title="submenuTitle"></sub-menu>
</template>

<script>
import SubMenu from '@/components/common/SubMenu.vue';
export default {
  components: {
    SubMenu,
  },
  data() {
    return {
      submenuTitle: 'Contect',
    };
  },
};
</script>

<style></style>
