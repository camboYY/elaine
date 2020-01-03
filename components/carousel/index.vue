<template>
  <v-carousel
    cycle
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
    class="carousel-container"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      transition="fade"
      reverse-transition="fade"
    >
      <v-sheet height="100%">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <img :src="loadImage(slide)" />
          <div class="center-box">
            <div class="display-title">Nature Inspired</div>
            <div class="sub-title">Nature Inspired</div>
            <div class="btn-wrapper">
              <jw-button class="btn jwbtn-pink"> View More </jw-button>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      slides: [
        'main-home-slider-img-1',
        'main-home-slider-img-2',
        'main-home-slider-img-3'
      ],
    }
  },

  methods: {
    loadImage (imageSrc) {
      try {
        return require(`~/assets/img/${imageSrc}.jpg`)
      } catch (error) {
        console.log(error)
        return
      }
    },

  },

}
</script>
<style lang="stylus" >


.carousel-container {
  display: flex;
  justify-content: center;

  // height: 600px !important;
  img {
    height: 100%;
    width: 100%;
  }

  .fade-enter-active {
    transform-origin: 50% 65%;
    transition: transform 10s, filter 3s ease-in-out;
    filter: brightness(150%);
    transform: scale(1.1);
  }

  .fade-enter {
    filter: brightness(100%);
    transform: scale(1);
  }

  .center-box {
    display: block;
    position: absolute;

    .display-title, .sub-title, .btn-wrapper {
      color: $color-text-white-light;
      text-align: center;
    }

    .display-title {
      font-size: 9rem;
      font-family: 'Dancing Script';
    }

    .btn-wrapper {
      & > button {
        width: 20%;
        font-size: 1rem;
        font-weight: 200;
        border-radius: 50px;
      }
    }

    .sub-title {
      font-size: 4rem;
    }
  }
}
</style>
