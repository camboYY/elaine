<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <popularProduct />

      <!-- <VueCoreImageUpload
        :class="['btn', 'btn-primary']"
        :crop="false"
        @imageuploaded="imageuploaded"
        :data="data"
        :max-file-size="5242880"
        url="your server url" >
      </VueCoreImageUpload> -->
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'
import popularProduct from './products/_popular.vue'
import Logo from '~/components/Logo.vue'
import VueCoreImageUpload from 'vue-core-image-upload'

export default {
  data() {
    return {
      data: {
        src:
          'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
      }
    }
  },
  methods: {
    imageuploaded(res) {
      if (res.errcode == 0) {
        this.src =
          'http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png'
      }
    }
  },
  components: {
    Logo,
    VueCoreImageUpload,
    popularProduct
  }
}
</script>
