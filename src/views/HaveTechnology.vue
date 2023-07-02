<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div>
      <MainInfopage
        :content1="content1"
        :content2="content2"
        :content3="content3"
        :imgPath1="imgPath1"
        :imgPath2="imgPath2"
        :imgPath3="imgPath3"
      ></MainInfopage>
    </div>
  </div>
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
      content1: '내용1',
      content2: '내용2',
      content3: '내용3',
    };
  },
};
</script>

<style></style>
