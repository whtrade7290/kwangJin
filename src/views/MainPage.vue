<template>
  <div>
    <carousel-component
      :ImgPaths="carouselImgs"
      :calledMainPage="calledMainPage"
    ></carousel-component>
    <view-slide
      :contents="contents"
      :imgPaths="imgPaths"
      :startShowImg="startShowImg"
      :endShowImg="endShowImg"
      :calledMainPage="true"
    ></view-slide>
  </div>
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue';
import ViewSlide from '@/components/ViewSlideComponent.vue';

export default {
  components: {
    CarouselComponent,
    ViewSlide,
  },
  data: function () {
    return {
      contents: ['내용1', '내용2', '내용3'],
      imgPaths: ['info-img1.jpg', 'info-img1.jpg', 'info-img1.jpg'],
      startShowImg: 100,
      endShowImg: 400,
      decideToheight: 'calledMainPage',
      carouselImgs: ['1.jpg', '2.jpg', '3.png'],
      calledMainPage: true,
    };
  },
};
</script>
