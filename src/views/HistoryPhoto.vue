<template>
  <div>
    <div
      class="history-img mt-16 w-2/3"
      v-for="(image, index) in images"
      :key="index"
    >
      <img class="object-cover" :src="require(`@/assets/${image}`)" />
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
