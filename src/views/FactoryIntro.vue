<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <carousel-component
      :ImgPaths="carouselImgs"
      :calledMainPage="calledMainPage"
    ></carousel-component>
  </div>
</template>

<script>
// import carousel from 'vue-owl-carousel';
import CarouselComponent from '@/components/CarouselComponent.vue';
import SubMenu from '@/components/common/SubMenu.vue';
export default {
  components: { SubMenu, CarouselComponent },
  data: function () {
    return {
      options: {
        type: 1,
      },
      submenuTitle: '공장소개',
      carouselImgs: ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'],

      calledMainPage: false,
    };
  },
};
</script>

<style scope>
body {
  font-family: 'Jua', sans-serif;
  font-family: 'Orbit', sans-serif;
}
.head-back-div {
  width: 100%;
  height: 25vh;
  background-image: url('@/assets/3.jpg');
  /* background-size: cover; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.intro-title {
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
  font-weight: bold;
  color: #ffffff;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.main-container {
  width: 100%;
  height: 75vh;
  padding-left: 10vw;
  padding-right: 10vw;
  margin-top: 10vh;
  margin-bottom: 20vh;
}
.main-img-div {
  width: 70vw;
  height: 70vh;
  object-fit: cover;
  display: flex;
  justify-content: center;
}
img {
  object-fit: cover;
}
.txt-box {
  position: absolute;
  top: 15%;
  left: 15%;
  font-size: 50px;
}
button {
  color: #006838;
  font-size: 2rem;
  margin-left: 4rem;
  margin-top: 2rem;
  padding: 0.5rem 5rem 0.5rem 5rem;
  border-radius: 5px;
}
p {
  color: #2c3333;
}
</style>
