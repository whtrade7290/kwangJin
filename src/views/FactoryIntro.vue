<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div class="main-container">
      <carousel class="main-carousel" :nav="false" :autoplay="false" :items="1">
        <div class="main-img-div">
          <img class="main-img" src="@/assets/4.jpg" />
          <div class="explain-box">
            Lorem ipsum dolor sit amet, ad movet dolore instructior qui, nec
            ubique primis ex. Mea libris invenire sensibus at. Has ea modus
            admodum voluptatum, modo percipit voluptatibus id eos. Eu eam dolore
            detraxit efficiendi, nibh vide gloriatur ex vix, id utinam ceteros
            per. At nibh interesset definitiones duo. Vel ex mundi noluisse
            sententiae, ignota aliquip pri eu. Accumsan appellantur per in,
            velit iracundia consequuntur sea et.
          </div>
        </div>
        <div class="main-img-div">
          <img class="main-img" src="@/assets/5.jpg" />
          <div class="explain-box">
            Lorem ipsum dolor sit amet, ad movet dolore instructior qui, nec
            ubique primis ex. Mea libris invenire sensibus at. Has ea modus
            admodum voluptatum, modo percipit voluptatibus id eos. Eu eam dolore
            detraxit efficiendi, nibh vide gloriatur ex vix, id utinam ceteros
            per. At nibh interesset definitiones duo. Vel ex mundi noluisse
            sententiae, ignota aliquip pri eu. Accumsan appellantur per in,
            velit iracundia consequuntur sea et.
          </div>
        </div>
        <div class="main-img-div">
          <img class="main-img" src="@/assets/6.jpg" />
          <div class="explain-box">
            Lorem ipsum dolor sit amet, ad movet dolore instructior qui, nec
            ubique primis ex. Mea libris invenire sensibus at. Has ea modus
            admodum voluptatum, modo percipit voluptatibus id eos. Eu eam dolore
            detraxit efficiendi, nibh vide gloriatur ex vix, id utinam ceteros
            per. At nibh interesset definitiones duo. Vel ex mundi noluisse
            sententiae, ignota aliquip pri eu. Accumsan appellantur per in,
            velit iracundia consequuntur sea et.
          </div>
        </div>
        <div class="main-img-div">
          <img class="main-img" src="@/assets/7.jpg" />
          <div class="explain-box">
            Lorem ipsum dolor sit amet, ad movet dolore instructior qui, nec
            ubique primis ex. Mea libris invenire sensibus at. Has ea modus
            admodum voluptatum, modo percipit voluptatibus id eos. Eu eam dolore
            detraxit efficiendi, nibh vide gloriatur ex vix, id utinam ceteros
            per. At nibh interesset definitiones duo. Vel ex mundi noluisse
            sententiae, ignota aliquip pri eu. Accumsan appellantur per in,
            velit iracundia consequuntur sea et.
          </div>
        </div>
        <div class="main-img-div">
          <img class="main-img" src="@/assets/8.jpg" />
          <div class="explain-box">
            Lorem ipsum dolor sit amet, ad movet dolore instructior qui, nec
            ubique primis ex. Mea libris invenire sensibus at. Has ea modus
            admodum voluptatum, modo percipit voluptatibus id eos. Eu eam dolore
            detraxit efficiendi, nibh vide gloriatur ex vix, id utinam ceteros
            per. At nibh interesset definitiones duo. Vel ex mundi noluisse
            sententiae, ignota aliquip pri eu. Accumsan appellantur per in,
            velit iracundia consequuntur sea et.
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import SubMenu from '@/components/common/SubMenu.vue';
export default {
  components: { carousel, SubMenu },
  data: function () {
    return {
      options: {
        type: 1,
      },
      submenuTitle: '공장소개',
    };
  },
};
</script>

<style scope>
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
.main-container {
  width: 100%;
  height: 75vh;
  padding-left: 10vw;
  padding-right: 10vw;
  margin-top: 10vh;
  margin-bottom: 20vh;
}
.main-img-div {
  width: 100%;
  height: 70vh;
  object-fit: cover;
  display: flex;
  justify-content: center;
}
img {
  object-fit: cover;
}
.txt-box {
  position: absolute;
  top: 15%;
  left: 15%;
  font-size: 50px;
}
button {
  color: #006838;
  font-size: 2rem;
  margin-left: 4rem;
  margin-top: 2rem;
  padding: 0.5rem 5rem 0.5rem 5rem;
  border-radius: 5px;
}
p {
  color: #2c3333;
}
.explain-box {
  align-items: center;
  width: 50vw;
  /* text-shadow: 1px 1px 1px #888888; */
  text-shadow: -2px -2px 4px #cccccc;
}
</style>
