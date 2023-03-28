<template>
  <div id="mainPageDiv">
    <transition>
      <div
        class="info-sections mt-16 flex"
        v-show="isShow1"
        :class="{ show: isShow1 }"
      >
        <div class="info-img-div1 ml-32">
          <img src="@/assets/info-img1.jpg" />
        </div>
        <div class="info-img-div1 ml-32 info-text-box">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </transition>
    <transition>
      <div
        class="info-sections mt-16 flex"
        v-show="isShow2"
        :class="{ show: isShow2 }"
      >
        <div class="info-img-div1 ml-32 info-text-box">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions
          <!-- of Lorem Ipsum. 스크롤 위치: {{ scrollEvents }} -->
        </div>
        <div class="info-img-div1 ml-32">
          <img src="@/assets/info-img1.jpg" />
        </div>
      </div>
    </transition>
    <transition>
      <div
        class="info-sections mt-16 flex"
        v-show="isShow3"
        :class="{ show: isShow3 }"
      >
        <div class="info-img-div1 ml-32">
          <img src="@/assets/info-img1.jpg" />
        </div>
        <div class="info-img-div1 ml-32 info-text-box">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      isShow1: false,
      isShow2: false,
      isShow3: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Retrieve the scroll position
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
        console.log('this.scrollPosition >= 1200', this.scrollPosition);
        this.isShow1 = false;
      }
      if (this.scrollPosition < 1000) {
        console.log('this.scrollPosition >= 1200', this.scrollPosition);
        this.isShow2 = false;
      }
      if (this.scrollPosition < 1400) {
        console.log('this.scrollPosition >= 1200', this.scrollPosition);
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
  visibility: hidden;
}
.show {
  visibility: visible;
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
