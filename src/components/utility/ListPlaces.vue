<template>
  <div class="card-item">
    <!-- <transition name="fade" mode="out-in"> -->
      <v-img
        class="image-background"
        :lazy-src="require(`../../assets/${image}`)"
        :src="require(`../../assets/${image}`)"
        width="60px"
        min-height="100%"
      ></v-img>
      <div class="card-content">
        <div class="title-card">{{ title }}</div> 
        <div class="description-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a orci non lectus maximus scelerisque ut in ante. Sed est magna, mollis vulputate sem eu, suscipit elementum lorem. Praesent in bibendum sem, non interdum orci.</div> 
      </div>
    <!-- </transition> -->
  </div>
</template>

<script>

export default {
name: 'CardPlaces',
props: {
  // msg: String
  image: String,
  title: String
},
computed: {
  // imageSource () {
  //   const path = '@/assets/subway.jpeg'
  //   return import(path)
  // }
},
data: () => {
  return {
  }
},
methods: {
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-item {
  background-color: whitesmoke;
  // margin-bottom: 26px;
  border: solid 1px black;
  display: flex;
}

.image-background {
  // border-radius: 10px;
}

.card-content {
  margin-left: 10px;
  .title-card {
    font-weight: bold;
    // color: black;
  }

  .description-card {
    font-size: 12px;
    padding-right: 12px;
  }
}

</style>
