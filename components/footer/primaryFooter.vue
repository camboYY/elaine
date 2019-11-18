<template>
  <div class="footer-wrapper">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="(brand, i) in brands" :key="i"
        ><img :src="loadImage(brand.img)"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 10,
        spaceBetween: 0,
        slidesPerGroup: 6,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      brands: [
        {
          img: 'supplier-logos-homepage-antipodes.png',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-artemis.webp',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-drh.webp',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-ethique.webp',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-harker-herbals.png',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-lifestream.png',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-madara.webp',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-superfeast.webp',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-vitus.webp',
          to: '/'
        },
        {
          img: 'supplier-logos-homepage-weleda.webp',
          to: '/'
        }
      ]
    }
  },
  props: {
    dataSrc: {
      type: Object
    }
  },
  methods: {
    loadImage(imageSrc) {
      try {
        return require(`~/assets/img/brand/${imageSrc}`)
      } catch (error) {
        console.log(error)
        return
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="stylus">
.footer-wrapper {
  width: 100%;
  .swiper-slide {
    width : 200px !important;
    img {
      width: 100%
    }
  }
  .swiper-button-prev, .swiper-button-next {
    background-size: 20px 34px;
  }
}
</style>
