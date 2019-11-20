<template>
  <div class="language">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn x-small fab v-on="on">
          <img src="~assets/img/lang/united-kingdom.svg" alt="image lnage" />
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [{ title: 'English' }, { title: 'Khmer' }]
  })
}
</script>
<style lang="stylus">
@import '~assets/variables.styl';
.language {
    .v-btn {
      span img {
          height: 10%;
          width 20%
         }
      }

  }
</style>
