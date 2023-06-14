<template>
  <div class="container-wrapper">
    <div class="background">
      <div class="d-flex flex-column">
        <div class="search-container">
          <v-text-field
            label="Pesquisar"
            outlined
            dense
            append-icon="fa-search"
          ></v-text-field>
        </div> 
        <div class="places-content">
          <div v-for="(card , i) in showFiveItems" :key="i" :title="card" v-bind:class="{ 'main-card' : getMainCard(i) }">
            <CardPlaces :image="card.fileName"/>
          </div>
        </div>
        <div @click="rightMove">Right</div>
        <div @click="lefttMove">Left</div>
      </div>
    </div>
  </div>
</template>

<script>
import CardPlaces from './utility/CardPlaces.vue'
import places from '../config/places'


export default {
  name: 'PlacesLearning',
  props: {
    // msg: String
  },
  components: {
    CardPlaces,
  },
  computed: {
  },
  data: () => {
    return {
      showFiveItems: [],
      allPlaces: [],
      startIndex: 0,
      mainCard: 2,
    }
  },
  mounted() {
    this.showFiveItems = this.getFiveItems()
  },

  methods: {
    getMainCard(index) {
      return this.mainCard === index
    },
    getFiveItems() {
      const itemRender = places.slice(0, 5)
      return itemRender
    },
    rightMove() {
      this.startIndex = this.startIndex + 1

      const itemRender = places.slice(this.startIndex, this.startIndex + 5)

      this.showFiveItems = itemRender
    },
    lefttMove() {
      this.startIndex = this.startIndex - 1

      const itemRender = places.slice(this.startIndex, this.startIndex + 5)

      this.showFiveItems = itemRender
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.background {
  background-color: #E6E6E6;
  height: 100%;
}

.search-container {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .v-input ::v-deep {
    max-width: 40% !important;
    min-width: 350px;
    i {
      font-size: 18px !important;
    }
  }
}

.main-card {
    :deep(.card-background) { 
      height: 500px !important;
    }
  }

.places-content {
  // width: 100%;
  // position: relative;
  // display: grid;
  // grid-template-columns: repeat(5, auto);
  // margin: 20px 0;
  display: flex;
  justify-content: center;
  // flex-direction: column;
  align-items: center;
  .card-background {
    position: relative;
      padding: 0 2px;
      transition: 120ms all;
    // margin-left: 30px;
  }
}
</style>
