<template>
  <v-app class="aplication">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&family=Itim&display=swap');

.aplication {
  font-family: 'Inconsolata', monospace !important;
  font-family: 'Itim', cursive !important;
  // font-weight: bold;
}
</style>
