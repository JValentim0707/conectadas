<template>
  <div class="container-wrapper">
    <div class="background">
      <div class="d-flex">
        <div class="mr-3">Em Breve</div> 
        <v-icon color='white' size="40">fa-clock</v-icon>
      </div>
      <v-btn @click="$router.push('/')" class="mt-2" dark color="#9802B8" elevation="2">Voltar pra Home</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  props: {
    // msg: String
  },
  data: () => {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.background {
  background-color: rgb(53, 53, 53);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  div {
    font-size: 40px;
    color: white;
  }
}
</style>
