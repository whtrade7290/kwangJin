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
    <section class="flex mt-20">
      <history-list :historyContents="historyContents"></history-list>
      <history-photo :images="images"></history-photo>
    </section>
  </div>
</template>
<script>
import SubMenu from '@/components/common/SubMenu.vue';
import HistoryList from '@/views/HistoryList.vue';
import HistoryPhoto from '@/views/HistoryPhoto.vue';
export default {
  components: {
    SubMenu,
    HistoryList,
    HistoryPhoto,
  },
  data() {
    return {
      submenuTitle: '회사소개',
      historyContents: [
        {
          years: '1983. 07',
          performents: ['광진기업 설립 (시공)'],
        },
        {
          years: '2006',
          performents: ['부산 대저 자재생산공장 설립'],
        },
        {
          years: '2008',
          performents: ['경남 양산 공장이전'],
        },
        {
          years: '2011',
          performents: ['전남 담양군 공장이전'],
        },
        {
          years: '2013. 07',
          performents: ['주식회사 광진기업 법인설립 (전환)'],
        },
        {
          years: '2019. 09',
          performents: ['담양 에코산업단지 착공'],
        },
        {
          years: '2020. 05',
          performents: ['담양 에코산업단지 신축이전 (준공)'],
        },
        {
          years: '2020. 06',
          performents: ['(주)광진기업 공장등록'],
        },
        {
          years: '2022. 04',
          performents: ['(주)광진기업 공장증축'],
        },
      ],
      images: ['1.jpg', '2.jpg', '3.jpg', '1.jpg'],
    };
  },
};
</script>

<style scoped>
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
