<template>
  <div class="product-container">
    <v-card class="mx-auto" hover>
      <div class="ribbon">
        <div class="label">NEW</div>
      </div>
      <v-img :src="loadImage(dataSrc.img)"></v-img>
      <v-spacer />
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="product-name mb-1"
            >Lorem ipsum dolor</v-list-item-title
          >
          <div class="v-list-item__subtitle text-center">$40</div>
          <v-list-item-subtitle
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            earum adipisci, aperiam itaque atque veritatis optio accusantium
            iusto repellat labore quas ratione laboriosam, excepturi, porro
            vitae quaerat necessitatibus repellendus
            sequi?</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <div class="btn-wrapper">
        <jw-button class="btn round jwbtn jwbtn-pink">add to card</jw-button>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    dataSrc: {
      type: Object
    }
  },
  methods: {
    loadImage(imageSrc) {
      try {
        return require(`~/assets/img/${imageSrc}.jpg`)
      } catch (error) {
        console.log(error)
        return
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/variables.styl';

.product-container {
  margin: 10px;

  .product-name {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal;
  }

  .v-card {
    .price {
      font-size: 2rem;
      font-weight: 200;
    }

    .btn-wrapper {
      button {
        width: 52%;
      }

      width: 100%;
      position: absolute;
      display: none;
      top: 45%;
      left: 23%;
    }

    &:hover {
      .btn-wrapper {
        display: initial;
      }
    }

  /*  ================================================
                      RIBBON EFFECT
      ================================================  */
    .ribbon {
      position: absolute;
      display: block;
      top: -4px;
      right: -4px;
      width: 110px;
      height: 110px;
      overflow: hidden;
      z-index 1
    }
    .ribbon .label {
      position: relative;
      display: block;
      left: -10px;
      top: 23px;
      width: 158px;
      padding: 10px 0;
      font-size: 15px;
      text-align: center;
      color: #fff;
      background-color: #e85e68;
      -webkit-box-shadow: 0px 0px 4px rgba(0,0,0,0.3);
      -moz-box-shadow: 0px 0px 4px rgba(0,0,0,0.3);
      -ms-box-shadow: 0px 0px 4px rgba(0,0,0,0.3);
      box-shadow: 0px 0px 4px rgba(0,0,0,0.3);
      -webkit-transform: rotate(45deg) translate3d(0,0,0);
      -moz-transform: rotate(45deg) translate3d(0,0,0);
      -ms-transform: rotate(45deg) translate3d(0,0,0);
      transform: rotate(45deg) translate3d(0,0,0);
    }

    .label:before, .label:after {
      content: '';
      position: absolute;
      bottom: -4px;
      border-top: 4px solid #a71c26;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }

    .label:before {
      left: 0;
    }

    .label:after {
      right: 0;
    }
  }
}
</style>
<style lang="stylus">
.product-container {
  .v-card .btn-wrapper {
    button {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
}
</style>
