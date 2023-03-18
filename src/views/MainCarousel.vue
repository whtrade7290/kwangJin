<template>
  <div class="main-container">
    <carousel class="main-carousel" :nav="false" :autoplay="true" :items="1">
      <div class="main-img-div">
        <img class="main-img" src="@/assets/1.jpg" />
        <div class="txt-box">
          <div class="flex w-40">
            <img
              class="h-20 w-20 object-cover"
              src="@/assets/logo-kwangJIn.png"
              alt=""
            />
            <span class="font-semibold">광</span>
            <span class="font-semibold" style="color: #006838">진</span>
            <span class="font-semibold">기</span>
            <span class="font-semibold" style="color: #006838">업</span>
          </div>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
          <p>cccccccccccccccccccccccc</p>
          <button>공장 시설 체험</button>
        </div>
      </div>

      <div class="main-img-div">
        <img class="main-img object-cover h-300" src="@/assets/2.jpg" />
        <div class="txt-box">
          <div class="flex w-40">
            <img
              class="h-20 w-20 object-cover"
              src="@/assets/logo-kwangJIn.png"
              alt=""
            />
            <span class="font-semibold">광</span>
            <span class="font-semibold" style="color: #006838">진</span>
            <span class="font-semibold">기</span>
            <span class="font-semibold" style="color: #006838">업</span>
          </div>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
          <p>cccccccccccccccccccccccc</p>
        </div>
      </div>

      <div class="main-img-div">
        <img class="main-img" src="@/assets/3.png" />
        <div class="txt-box">
          <div class="flex w-40">
            <img
              class="h-20 w-20 object-cover"
              src="@/assets/logo-kwangJIn.png"
              alt=""
            />
            <span class="font-semibold" style="color: #58595b">광</span>
            <span class="font-semibold" style="color: #006838">진</span>
            <span class="font-semibold" style="color: #58595b">기</span>
            <span class="font-semibold" style="color: #006838">업</span>
          </div>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaa</p>
          <p>bbbbbbbbbbbbbbbbbbbbbbbbb</p>
          <p>cccccccccccccccccccccccc</p>
          <button>공장 시설 체험</button>
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
    };
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  height: 50rem;
  background-color: bisque;
}
.main-img-div {
  width: 100%;
  height: 50rem;
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
  color: #006838;
  outline: 3px solid #006838;
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
