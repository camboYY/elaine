<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <!-- <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      flat
      max-height="300px"
      color="#fff"
    >
      <v-app-bar-nav-icon color="black" @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon color="black"
          >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
        >
      </v-btn>
      <div class="image-wrapper">
        <img src="~/assets/img/logo.png" />
      </div>
      <div class="signup-login">
        <jw-button class="btn jwbtn round jwbtn-pink">login </jw-button>
        <jw-button class="btn jwbtn round jwbtn-pink">Register </jw-button>
      </div>
      <lang />
    </v-app-bar>
    <v-content>
      <carousel />
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app class="font-weight-medium">
      <v-layout justify-center>
        <primary-footer />
      </v-layout>
      <!-- <span>&copy; 2019</span> -->
    </v-footer>
  </v-app>
</template>

<script>
import carousel from '~/components/carousel/index.vue'
import primaryFooter from '~/components/footer/primaryFooter.vue'
import lang from '~/components/language/lang.vue'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    this.$fbCustomerChat
  },
  components: {
    carousel,
    primaryFooter,
    lang
  }
}
</script>
<style lang="stylus">


.v-application {
  font-family: $body-font-family;
}

.theme--light.v-footer {
  background-color: $color-white-light;

  .footer-fixed {
    overflow: hidden;
  }
}

.v-toolbar__content .image-wrapper {
  height: 70%;
  width: 150px;

  img {
    width: 100%;
    height: 100%;
  }
}

.v-toolbar__content .v-btn__content {
  .v-icon {
    color: $color-text-black;

    &:hover {
      color: $color-text-pink-1;
    }
  }
}
.signup-login {
  display flex;
  justify-content flex-end
  width 100%
  button {
    width 15%
  }
}
</style>
