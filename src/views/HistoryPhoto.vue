<template>
  <div>
    <div class="history-img" v-for="(image, index) in images" :key="index">
      <img class="mt-14" :src="require(`@/assets/${image}`)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.history-img {
  display: flex;
  flex-direction: column;
}
</style>
