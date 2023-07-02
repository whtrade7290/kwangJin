<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <section class="greeting-section">
      <div class="greeting-div ml-20 mt-10">
        <h1>인사말1</h1>
      </div>
      <div class="owner-photo-div ml-36 mt-32">
        <h1>대표사진</h1>
      </div>
    </section>
    <section class="history-section flex mt-20">history</section>
  </div>
</template>
<script>
import SubMenu from '@/components/common/SubMenu.vue';
export default {
  components: {
    SubMenu,
  },
  data() {
    return {
      submenuTitle: '회사소개',
    };
  },
};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

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
.greeting-section {
  display: flex;
}

.greeting-div {
  width: 50vw;
  height: 80vh;
  background-color: antiquewhite;
}
.owner-photo-div {
  width: 50vh;
  height: 60vh;
  background-color: aquamarine;
}
.history-div {
  width: 100%;
  height: 80vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
.history-root-div {
  width: 100%;
  height: 80vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.draw-root {
  border-left: 2px solid #000000;
  height: 100vh;
  border: solid 1vh red;
  border-radius: 1rem;
}
</style>
