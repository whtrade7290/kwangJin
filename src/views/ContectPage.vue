<template>
  <div>
    <sub-menu :title="submenuTitle"></sub-menu>
    <div class="flex mt-20 mb-20">
      <div class="w-1/2 flex flex-col items-center">
        <span class="text-3xl font-bold mb-10" style="color: #006838"
          >찾아 오시는 길</span
        >
        <p class="text-gray-600 w-96">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p class="text-gray-600 w-96">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p class="text-gray-600 w-96">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div class="w-1/2 h-96">
        <div id="map" style="width: 100%; height: 400px"></div>
      </div>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xq30x63yvw"
></script>
<script>
import SubMenu from '@/components/common/SubMenu.vue';

export default {
  components: {
    SubMenu,
  },
  data() {
    return {
      submenuTitle: '보유기술',
    };
  },
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=xq30x63yvw';
    script.async = true;
    script.onload = this.initializeMap;
    document.head.appendChild(script);
  },
  methods: {
    initializeMap() {
      var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(35.34461513527947, 127.00952501154676),
        zoom: 19,
        scaleControl: true,
      });

      // 마커의 위치를 설정합니다.
      var markerPosition = new naver.maps.LatLng(
        35.34461513527947,
        127.00952501154676,
      );

      // 마커를 생성합니다.
      var marker = new naver.maps.Marker({
        position: markerPosition,
        map: map,
      });
    },
  },
};
</script>

<style scoped></style>
