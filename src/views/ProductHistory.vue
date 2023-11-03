<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div class="flex text-center ml-60">
      <history-list :historyContents="historyContents"></history-list>
      <history-photo :images="images"></history-photo>
    </div>
  </div>
</template>

<script>
import SubMenu from '@/components/common/SubMenu.vue';
import HistoryList from '@/views/HistoryList.vue';
import HistoryPhoto from '@/views/HistoryPhoto.vue';
export default {
  components: { SubMenu, HistoryList, HistoryPhoto },
  data: function () {
    return {
      submenuTitle: '작업 History',
      historyContents: [
        {
          years: '2015',
          performents: ['농업회사법인 해담토(유) 신축공사 자재납품'],
        },
        {
          years: '2019~2021',
          performents: [
            '부여지구 수출전문 스마트팜 온실신축사업 건축공사 자재납품',
          ],
        },
        {
          years: '2020',
          performents: ['경북 상주 스마트팜 혁신밸리 자재납품'],
        },
        {
          years: '2021',
          performents: [
            '전북 김제 스마트팜 혁신밸리 자재납품',
            '전남 고흥 스마트팜 혁신밸리 자재납품',
          ],
        },
        {
          years: '2022',
          performents: [
            '부여 달콤농업법인회사 유리온실 신축공사 자재납품',
            '창원 (주)미리내 농업 유리온실 신축공사 자재납품',
            '밀양 망고재배온실 신축공사 자재납품',
          ],
        },
      ],
      images: ['5.png', '6.png', '7.png'],
    };
  },
};
</script>

<style scoped></style>
