<template>
  <div>
    <div class="section-1 mt-16 flex">
      <div class="info-img-div1 ml-32">
        <img src="@/assets/info-img1.jpg" />
      </div>
      <div class="info-img-div1 ml-32 info-text-box">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
    <div class="section-1 mt-16 flex">
      <div class="info-img-div1 ml-32 info-text-box">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        <!-- of Lorem Ipsum. 스크롤 위치: {{ scrollEvents }} -->
      </div>
      <div class="info-img-div1 ml-32">
        <img src="@/assets/info-img1.jpg" />
      </div>
    </div>
    <div class="section-1 mt-16 flex">
      <div class="info-img-div1 ml-32">
        <img src="@/assets/info-img1.jpg" />
      </div>
      <div class="info-img-div1 ml-32 info-text-box">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
    <div>
      <transition>
        <li v-if="isOK">1</li>
        <li v-if="isOK">2</li>
        <li v-if="isOK">3</li>
      </transition>
      <button v-on:click="testMethod">버튼</button><br />
      <!-- 스크롤 위치: {{ scrollEvents }} -->
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isOK: false,
    };
  },
  methods: {
    testMethod() {
      console.log('testMethod');
      window.scrollTo(100, 200);
    },
    onScroll() {
      console.log('실행');
    },
  },
  computed: {},
  mounted() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.scrollEvents);
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents);
  },
};
</script>

<style scoped>
.section-1 {
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

.list-enter-active,
.list-leave-active {
  transition: all 3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>
