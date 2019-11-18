<template>
  <div class="product-wrapper">
    <v-container class="container-xs">
      <v-layout
        row
        justify-center
      >
        <product
          v-for="product in products"
          :key="product.id"
          :dataSrc="product"
          class="xsmall-1 small-2 medium-4 large-4 xlarge-4"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import product from './index.vue'
export default {
  data () {
    return {
      products: [
        { id: 1, img: 'product-1' },
        { id: 2, img: 'product-2' },
        { id: 3, img: 'product-3' },
        { id: 4, img: 'product-4' },
        { id: 5, img: 'product-5' },
      ]
    }
  },
  components: {
    product,
  },
}
</script>

<style lang="stylus" scoped></style>