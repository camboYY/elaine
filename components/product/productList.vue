<template>
  <div class="product-wrapper">
    <v-container>
      <v-layout row justify-center>
        <product
          v-for="product in products"
          :key="product.id"
          :dataSrc="product"
          class="col-12 col-md-3 col-lg-4 col-xlg-4"
        />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import product from './index.vue'
export default {
  data() {
    return {
      products: [
        { id: 1, img: 'product-1' },
        { id: 2, img: 'product-2' },
        { id: 3, img: 'product-3' },
        { id: 4, img: 'product-4' },
        { id: 5, img: 'product-5' }
      ]
    }
  },
  components: {
    product
  }
}
</script>

<style lang="stylus" scoped></style>
