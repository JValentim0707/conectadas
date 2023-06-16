<template>
    <div class="card-background">
      <!-- <transition name="fade" mode="out-in"> -->
        <v-img
          class="image-background"
          :lazy-src="imageSource"
          :src="require(`../../assets/${image}`)"
          height="100%"
        ></v-img>
        <div class="card-content">
        <div class="title-card">{{ title }}</div> 
        <div class="description-card">ipsum dolor sit amet, consectetur iscing elit.</div> 
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
.card-background {
  width: 17%;
  min-width: 280px;
  max-width: 300px;
  height: 400px;
  border-radius: 5px;
  display: flex;
  align-items: end;
  // transform: translateX(650px);
  // transition: transform 0.8s;
  .v-image {
    border-radius: 10px;
  }
  .card-content {
    position: absolute;
    z-index: 2;
    background-color: #f5f5f5d8;
    width: 99%;
    height: 30px;
    border-radius: 0px 0px 10px 10px;

    .title-card {
      font-size: 17px;
      font-weight: bold;
      margin-left: 8px;
    }
    .description-card {
      font-size: 15px;
      font-weight: bold;
      margin-left: 8px;
      display: none;
    }
  }

  &:hover {
    .card-content {
      transition: 0.8s;
      height: 100px;
      // background-color: red;
      .description-card {
        display: flex;

      }
    }
  }
}

</style>
