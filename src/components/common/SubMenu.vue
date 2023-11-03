<template>
  <section class="mt-28">
    <div class="head-back-div">
      <div class="intro-title text-bg mb-24">{{ title }}</div>
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
  background-image: url('@/assets/20231103123433.png');
  /* background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}
.text-bg {
  font-family: 'Jua', sans-serif;
  font-family: 'Orbit', sans-serif;
}
</style>
