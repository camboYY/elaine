<template>
  <div class="products">
    <product
      v-for="product in products"
      v-bind:key="product.id"
      :dataSrc="product"
    />
  </div>
</template>
<script>
import product from '~/components/product/index.vue'
export default {
  data() {
    return {
      products: [
        { id: 1, img: 'product-1' },
        { id: 2, img: 'product-2' },
        { id: 3, img: 'product-3' },
        { id: 4, img: 'product-4' }
      ]
    }
  },
  components: {
    product
  },
  computed() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="stylus" scoped></style>
