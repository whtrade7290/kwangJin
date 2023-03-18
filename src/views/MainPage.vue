<template>
  <div>
    <MainCarousel></MainCarousel>
    <MainInfopage></MainInfopage>
  </div>
</template>

<script>
import MainCarousel from '@/views/MainCarousel.vue';
import MainInfopage from '@/views/MainInfopage.vue';

export default {
  components: {
    MainCarousel,
    MainInfopage,
  },
};
</script>
