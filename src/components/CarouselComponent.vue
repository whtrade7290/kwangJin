<template>
  <div class="main-container">
    <carousel
      class="main-carousel mt-40"
      :nav="false"
      :autoplay="true"
      :items="1"
    >
      <div
        class="main-img-div"
        v-for="(imgPath, index1) in ImgPaths"
        :key="index1"
      >
        <img class="main-img" :src="require(`@/assets/${imgPath}`)" />
        <div class="txt-box" v-if="calledMainPage">
          <div class="flex w-96">
            <div class="w-2/4 h-21">
              <img
                class="object-cover"
                src="@/assets/logo-kwangJIn.png"
                alt=""
              />
            </div>

            <div class="flex mt-8">
              <span class="font-semibold text-6xl">광</span>
              <span class="font-semibold text-6xl" style="color: #006838"
                >진</span
              >
              <span class="font-semibold text-6xl">기</span>
              <span class="font-semibold text-6xl" style="color: #006838"
                >업</span
              >
            </div>
          </div>
          <button
            class="hover:bg-green-900 text-white font-medium py-2 px-4 rounded"
          >
            시설체험
          </button>
        </div>
        <div v-else>
          <div v-for="(Explanation, index2) in Explanations" :key="index2">
            <div v-if="index2 == index1" class="w-36 font-bold">
              <h1>{{ Explanation }}</h1>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
export default {
  components: { carousel },
  data: function () {
    return {
      options: {
        type: 1,
      },
      Explanations: [
        '멀티빔 홀가공 절단 복합기(NEWRUN5)',
        '알루미늄 - 다축가공기(gutter) 2대',
        '절단기 – 10M 1대, 5M 1대',
        '루프바 가공기',
        '철골 - 파이프 파이버 레이저',
      ],
    };
  },
  props: {
    ImgPaths: {
      type: Array,
      required: true,
    },
    calledMainPage: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 75vh;
}
.main-img-div {
  object-fit: cover;
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
  font-family: 'Jua', sans-serif;
  font-family: 'Orbit', sans-serif;
  color: #eeeeee;
  background-color: #006838;
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
