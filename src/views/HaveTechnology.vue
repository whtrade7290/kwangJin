<template>
  <section>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div>
      <MainInfopage
        :contents="contents"
        :imgPaths="imgPaths"
        :startShowImg="startShowImg"
        :endShowImg="endShowImg"
        :calledMainPage="false"
      ></MainInfopage>
    </div>
  </section>
</template>

<script>
import SubMenu from '@/components/common/SubMenu.vue';
import MainInfopage from '@/views/MainInfopage.vue';
export default {
  components: {
    SubMenu,
    MainInfopage,
  },
  data() {
    return {
      submenuTitle: '보유기술',
      contents: ['특허1', '특허2', '특허3', '특허4', '특허5', '특허6'],
      imgPaths: ['9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'],
      startShowImg: 100,
      endShowImg: 100,
    };
  },
};
</script>

<style></style>
