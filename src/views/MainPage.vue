<template>
  <div>
    <MainCarousel></MainCarousel>
    <MainInfopage
      :content1="content1"
      :content2="content2"
      :content3="content3"
      :imgPath1="imgPath1"
      :imgPath2="imgPath2"
      :imgPath3="imgPath3"
    ></MainInfopage>
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
  data: function () {
    return {
      content1: '내용1',
      content2: '내용2',
      content3: '내용3',
    };
  },
};
</script>
