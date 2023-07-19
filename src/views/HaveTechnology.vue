<template>
  <section>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div
      v-for="(patent, index) in patents.contents"
      :key="index"
      class="have-tech-section mt-28 mb-20 flex"
    >
      <div class="flex" v-if="index % 2 === 0">
        <div class="have-tech-photo flex justify-center">
          <img :src="require(`@/assets/${patents.imgPaths[index]}`)" />
        </div>
        <div class="have-tech-content mr-28 pr-16">
          <h1 class="text-4xl font-bold text-black">Title</h1>
          <br />
          {{ patent }}
        </div>
      </div>
      <div class="flex" v-if="index % 2 === 1">
        <div class="have-tech-content ml-28 pl-16">
          <h1 class="text-4xl font-bold text-black">Title</h1>
          <br />
          {{ patent }}
        </div>
        <div class="have-tech-photo flex justify-center">
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
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
