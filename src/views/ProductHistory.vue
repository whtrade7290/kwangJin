<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
  </div>
</template>

<script>
import SubMenu from '@/components/common/SubMenu.vue';
export default {
  components: { SubMenu },
  data: function () {
    return {
      submenuTitle: '작업 History',
    };
  },
};
</script>

<style></style>
