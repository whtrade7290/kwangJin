<template>
  <nav
    class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 relative"
    id="header"
  >
    <!-- Logo Container -->
    <div class="flex items-center">
      <!-- Logo -->
      <router-link to="/mainPage" class="cursor-pointer">
        <div class="flex justify-center">
          <img
            class="h-20 object-cover"
            src="@/assets/logo-kwangJIn.png"
            alt="Store Logo"
          />
          <div class="text-3xl font-bold m-5">
            <span>광</span>
            <span class="m-0" style="color: #006838">진</span>
            <span>기</span>
            <span class="m-0" style="color: #006838">업</span>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Links Section -->
    <div class="items-center hidden space-x-8 lg:flex">
      <router-link
        to="/companyIntro"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-bold"
      >
        회사소개
      </router-link>

      <router-link
        to="/haveTechnology"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-bold"
      >
        보유기술
      </router-link>

      <router-link
        to="/factoryIntro"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-bold"
      >
        공장소개
      </router-link>

      <router-link
        to="/productHistory"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-bold"
      >
        작업 History
      </router-link>

      <router-link
        to="/contectPage"
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300 font-bold"
      >
        Contact
      </router-link>
    </div>

    <!-- Icon Menu Section -->
    <div class="flex items-center space-x-5">
      <!-- Register -->
      <!-- <a
        class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
      >
        <svg
          class="fill-current h-5 w-5 mr-2 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z"
          />
        </svg>

        Staff
      </a> -->

      <!-- Login -->
      <!-- <router-link
        to="/loginPage"
        class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600"
      >
        <svg
          class="fill-current h-5 w-5 mr-2 mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
          />
        </svg>

        Login
      </router-link> -->
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
#header {
  position: fixed;
  background-color: white;
}
</style>
