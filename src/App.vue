<template>
  
  <v-app class="aplication">
    <!-- <v-layout class="overflow-visible" style="height: 56px;"> -->
    <v-bottom-navigation
      :value="value"
      color="primary"
      v-if="$route.name !== 'home'"
    >
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Created By Your Tcc Group</strong>
      </v-col>
  </v-footer>
  <!-- </v-layout> -->

  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&family=Itim&display=swap');

.aplication {
  display: flex;
  font-family: 'Inconsolata', monospace !important;
  font-family: 'Itim', cursive !important;
  width: 100%;
  .logo {
    z-index: 3;
    position: absolute;
    margin-top: 10px;
  }
  .v-bottom-navigation {
    background-color: #313131;
    .v-btn {
      background-color: #313131;
      span {
        color: whitesmoke;
      }
    }
  }
  // font-weight: bold;
}
</style>
