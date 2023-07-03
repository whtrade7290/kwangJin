<template>
  <section class="mt-28">
    <div class="head-back-div">
      <div class="intro-title">{{ title }}</div>
    </div>
  </section>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {};
  },
};
</script>
<style scoped>
.subMenu {
}
</style>
