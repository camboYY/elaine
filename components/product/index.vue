<template>
  <div class="product-container">
    <v-card hover class="max-auto">
      <v-img height="100%" width="100%" :src="loadImage(dataSrc.img)"></v-img>
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
      font-weight 200
    }
      .btn-wrapper {
        button {
          width : 52%;
        }
        width: 100%;
        position : absolute;
        display: none;
        top:45%;
        left: 23%;
    }

    &:hover {
      .btn-wrapper {
          display: initial;
      }
    }
  }
}
</style>
<style lang="stylus">
.product-container {
  .v-card .btn-wrapper {
     button {
      font-size: .8rem;
      font-weight: 400;
    }
  }
}
</style>
