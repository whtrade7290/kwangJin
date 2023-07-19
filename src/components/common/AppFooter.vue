<template>
  <footer class="bg-white dark:bg-gray-900 mt-16 h-5" id="footer">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              class="h-20 object-cover"
              src="@/assets/logo-kwangJIn.png"
              alt="Store Logo"
            />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >KwangJin Corporation</span
            >
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"></div>
        <div class="flex flex-col">
          <span>대한민국 전라남도 담양군 담양읍 에코산단3로 44</span>
          <span class="text-right">061-381-1353</span>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© COPYRIGHT KWANJIN INC. ALL RIGHTS RESERVED.</span
          >
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
    </div>
  </footer>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
#footer {
  /* position: absolute; */
  background-color: white;
}
</style>
