<template>
  <div class="popular-products">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="product-name mb-1"
          >popular products</v-list-item-title
        >
        <v-list-item-subtitle
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          earum adipisci, aperiam itaque atque veritatis optio accusantium iusto
          repellat labore quas ratione laboriosam, excepturi, porro vitae
          quaerat necessitatibus repellendus sequi?</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-container>
      <v-layout row justify-center>
        <product
          v-for="product in products"
          v-bind:key="product.id"
          :dataSrc="product"
          class="col-12 col-md-4 col-lg-3 col-xlg-3"
        />
      </v-layout>
    </v-container>
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
