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
.head-back-div {
  width: 100%;
  height: 25vh;
  background-image: url('@/assets/3.jpg');
  /* background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
