<template>
  <div class="flex">
    <div class="p-20 ml-28">
      <div class="history" v-for="item in historyContents" :key="item.years">
        <div>
          <h2>{{ item.years }}</h2>
          <ol>
            <li v-for="performent in item.performents" :key="performent">
              {{ performent }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    historyContents: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.history h2 {
  position: relative;
  font-size: 32px;
  color: #000;
  line-height: 1;
}
.history h2::before {
  content: '';
  position: absolute;
  left: -40px;
  top: 50%;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  background: #fff;
  transform: translateY(-50%);
  border: 5px solid #006838;
  box-sizing: border-box;
}
.history div {
  position: relative;
  padding: 0 0 0 40px;
}
.history div::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  height: 100%;
  border-left: 2px solid #ddd;
}
.history div:first-child:before {
  top: 10px;
  height: clac(100%-10px);
}
.history ol {
  padding: 20px 0 74px;
}
.history li {
  font-size: 17px;
  color: #000;
  line-height: 30px;
}
</style>
