<template>
  <div id="mainPageDiv">
    <transition>
      <div class="info-sections mt-16 flex" v-show="isShow1">
        <div class="info-img-div1 ml-32">
          <img src="@/assets/info-img1.jpg" />
        </div>
        <div class="info-img-div1 ml-32 info-text-box">
          {{ content1 }}
        </div>
      </div>
    </transition>
    <transition>
      <div class="info-sections mt-16 flex" v-show="isShow2">
        <div class="info-img-div1 ml-32 info-text-box">
          {{ content2 }}
        </div>
        <div class="info-img-div1 ml-32">
          <img src="@/assets/info-img1.jpg" />
        </div>
      </div>
    </transition>
    <transition>
      <div class="info-sections mt-16 flex" v-show="isShow3">
        <div class="info-img-div1 ml-32">
          <img src="@/assets/info-img1.jpg" />
        </div>
        <div class="info-img-div1 ml-32 info-text-box">
          {{ content3 }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    content1: {
      type: String,
      required: true,
    },
    content2: {
      type: String,
      required: true,
    },
    content3: {
      type: String,
      required: true,
    },
    imgPath1: {
      type: String,
      required: true,
    },
    imgPath2: {
      type: String,
      required: true,
    },
    imgPath3: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      scrollPosition: 0,
      isShow1: false,
      isShow2: false,
      isShow3: false,
      testImgPath1: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      // Do something with the scroll position
      // console.log(this.scrollPosition);
      if (this.scrollPosition > 400) {
        console.log('this.scrollPosition >= 400', this.scrollPosition);
        this.isShow1 = true;
      }
      if (this.scrollPosition > 800) {
        console.log('this.scrollPosition >= 800', this.scrollPosition);
        this.isShow2 = true;
      }
      if (this.scrollPosition > 1200) {
        console.log('this.scrollPosition >= 1200', this.scrollPosition);
        this.isShow3 = true;
      }
      if (this.scrollPosition < 600) {
        console.log('this.scrollPosition < 600', this.scrollPosition);
        this.isShow1 = false;
      }
      if (this.scrollPosition < 1000) {
        console.log('this.scrollPosition < 1000', this.scrollPosition);
        this.isShow2 = false;
      }
      if (this.scrollPosition < 1400) {
        console.log('this.scrollPosition < 1400', this.scrollPosition);
        this.isShow3 = false;
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
#mainPageDiv {
  height: 100rem;
}
.info-sections {
  width: 100%;
  height: 30rem;
}

.info-img-div1 {
  width: 40%;
  height: 100%;
  object-fit: cover;
}
.info-text-box {
  outline: black solid 1px;
  font-size: 1.5rem;
}
.active {
  visibility: hidden;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
