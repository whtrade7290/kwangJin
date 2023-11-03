<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <section class="greeting-section">
      <div class="owner-photo-div mt-16 ml-20">
        <img class="object-cover" src="@/assets/logo-kwangJIn.png" alt="" />
      </div>
      <div class="greeting-div w-3/6 font-bold text-xl mt-52">
        <h1>
          광진기업은 협력과 신뢰를 바탕으로 동반 상생을 기업 이념으로 삼아
          노력하고있는 유리온실 제조 전문업체입니다. 40여년의 경험을 통해 축적된
          데이터와 유럽의 선진 기술을 접목하여 국내산업이 세계로 도약할 수
          있도록 끊임없는 연구개발로 더욱더 발전된 자재를 개발할 것을
          약속드리며,유리온실 분야에서 탁월한 제품력으로 선도할수 있도록 최선을
          다하겠습니다. 앞으로도 건강하고 밝은 사회를 구현하고자 연구 및 개발에
          땀을 흘릴 것이며, 철저한 품질과 기획,설계,제조를 책임지는 광진기업이
          되겠습니다.
        </h1>
      </div>
    </section>
    <section class="flex">
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
  justify-content: start;
}

.owner-photo-div {
  width: 50vh;
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
