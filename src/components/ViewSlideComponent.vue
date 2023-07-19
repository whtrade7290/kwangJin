<template>
  <div :class="[calledMainPage ? 'height100rem' : 'height220rem']">
    <transition-group name="info-sections" tag="div">
      <div
        v-for="(content, index) in contents"
        :key="index"
        class="info-sections mt-16 flex"
        :class="[calledMainPage ? '' : 'addMargin7']"
        v-show="isShow[index]"
      >
        <div class="info-img-div1 ml-32" v-if="index % 2 === 0">
          <img :src="require(`@/assets/${imgPaths[index]}`)" />
        </div>
        <div class="info-img-div1 ml-32 info-text-box">
          {{ content }}
        </div>
        <div class="info-img-div1 ml-32" v-if="index % 2 === 1">
          <img :src="require(`@/assets/${imgPaths[index]}`)" />
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      required: true,
    },
    imgPaths: {
      type: Array,
      required: true,
    },
    startShowImg: {
      type: Number,
      required: true,
    },
    endShowImg: {
      type: Number,
      required: true,
    },
    calledMainPage: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      scrollPosition: 0,
      isShow: [],
      // scrollLevel: props.scrollLevel,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // 초기 스크롤 위치에서 요소 표시 여부 업데이트
  },
  methods: {
    handleScroll() {
      this.scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      // open
      this.isShow = this.contents.map((_, index) => {
        const start = (index + 1) * this.startShowImg;
        console.log('start', start);
        console.log('scrollPosition', this.scrollPosition);
        return this.scrollPosition >= start;
      });

      // close
      this.isShow = this.contents.map((_, index) => {
        const end = (index + 2) * this.endShowImg;
        return this.scrollPosition >= end;
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.height100rem {
  height: 100rem;
}
.height220rem {
  height: 220rem;
}
.addMargin7 {
  margin-bottom: 7rem;
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

.info-sections-enter-active,
.info-sections-leave-active {
  transition: all 0.5s;
}
.info-sections-enter,
.info-sections-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
