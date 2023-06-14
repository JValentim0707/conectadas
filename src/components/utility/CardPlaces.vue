<template>
    <div class="card-background">
      <v-img
        class="image-background"
        :lazy-src="imageSource"
        :src="require(`../../assets/${image}`)"
        height="100%"
      ></v-img>
    </div>
</template>

<script>

export default {
  name: 'CardPlaces',
  props: {
    // msg: String
    image: String
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
  // flex-direction: column;
  // align-items: flex-start;
  // justify-content: flex-end;
  // text-align: left;
  // padding: 10px;
  // width : 350px;
  // height : 500px;
  // background-color: rgba(255,255,255,0.7);
  // background-repeat: no-repeat;
  // background-blend-mode: overlay;
  // background-size: cover;
  .v-image {
    border-radius: 10px;
  }
}
</style>
