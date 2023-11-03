<template>
  <section>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div class="grid grid-cols-3 gap-3 ml-48 mt-28">
      <div
        v-for="(patent, index) in patents.contents"
        :key="index"
        class="have-tech-section"
      >
        <div class="have-tech-content text-center">
          <h2 class="text-2xl font-bold text-black">{{ patent }}</h2>
          <br />
        </div>
        <div class="have-tech-photo flex justify-center w-44 h-96">
          <img :src="require(`@/assets/${patents.imgPaths[index]}`)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SubMenu from '@/components/common/SubMenu.vue';
export default {
  components: {
    SubMenu,
  },
  data() {
    return {
      submenuTitle: '보유기술',
      patents: {
        contents: [
          '1.특허-온실시공방법',
          '2.디자인등록-G형강',
          '3.디자인등록-온실용프로파일(gutter)',
          '4.디자인등록)온실용프로파일(gutter연결구)',
          '5.디자인등록)온실용프로파일(roof bar)',
          '6.디자인등록)빗물받이관용홈통',
        ],
        imgPaths: ['9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'],
      },
    };
  },
};
</script>

<style scoped>
.have-tech-photo {
  width: 50%;
}
.have-tech-content {
  width: 50%;
}
</style>
