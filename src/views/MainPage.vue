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
      contents: [
        '광진기업은 협력과 신뢰를 바탕으로 동반 상생을 기업 이념으로 삼아 노력하고있는 유리온실 제조 전문업체입니다.',
        '40여년의 경험을 통해 축적된 데이터와 유럽의 선진 기술을 접목하여 국내산업이 세계로 도약할 수 있도록 끊임없는 연구개발로 더욱더 발전된 자재를 개발할 것을 약속드리며,유리온실 분야에서 탁월한 제품력으로 선도할수 있도록 최선을 다하겠습니다.',
        '앞으로도 건강하고 밝은 사회를 구현하고자 연구 및 개발에 땀을 흘릴 것이며, 철저한 품질과 기획,설계,제조를 책임지는 광진기업이 되겠습니다.',
      ],
      imgPaths: ['4.png', '1.jpg', '2.jpg'],
      startShowImg: 100,
      endShowImg: 400,
      decideToheight: 'calledMainPage',
      carouselImgs: ['1.png', '2.png', '3.png'],
      calledMainPage: true,
    };
  },
};
</script>
