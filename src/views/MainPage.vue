<template>
  <div>
    <MainCarousel></MainCarousel>
    <MainInfopage
      :contents="contents"
      :imgPaths="imgPaths"
      :startShowImg="startShowImg"
      :endShowImg="endShowImg"
      :calledMainPage="true"
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
      contents: ['내용1', '내용2', '내용3'],
      imgPaths: ['info-img1.jpg', 'info-img1.jpg', 'info-img1.jpg'],
      startShowImg: 100,
      endShowImg: 400,
      decideToheight: 'calledMainPage',
    };
  },
};
</script>
