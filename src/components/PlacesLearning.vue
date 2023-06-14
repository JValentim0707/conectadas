<template>
  <div class="container-wrapper">
    <div class="background">
      <div class="d-flex flex-column">
        <div class="search-container">
          <v-text-field
            v-model="searchTerm"
            label="Pesquisar"
            outlined
            dense
            append-icon="fa-search"
          ></v-text-field>
        </div> 
        <div class="places-content">
          <div v-for="(card , i) in showFiveItems" 
            :key="i" :title="card" 
            v-bind:class="{ 'main-card' : getMainCard(i), 'test' : startScroll }">
            <CardPlaces :image="card.fileName" :title="card.title"/>
          </div>
          <div @click="rightMove" class="right-arrow">
            <v-icon color="white" size="26">fa-arrow-right</v-icon>
          </div>
          <div @click="lefttMove" class="left-arrow">
            <v-icon color="white">fa-arrow-left</v-icon>
          </div>
        </div>
        <div class="map-location">
          <div class="location-icon">
            <v-icon color="#39b907">fa-map</v-icon>
          </div>
          <div class="location-info">
            <div class="location-title">{{ selectedCard.title }}</div>
            <div>Endereço: {{ selectedCard.address }}</div>
            <div>Telefone: {{ selectedCard.phone }}</div>
          </div>
          <div class="button-maps">
            <v-btn @click="openMapsUrl(selectedCard.url)" class="mt-2" dark color="#39b907" max-width="180" elevation="2">
              <v-icon class="mr-2 ml-2" color="whitesmoke">fa-location-dot</v-icon>
              Ir para o Mapa  
            </v-btn>
          </div>
        </div>
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
    selectedCard() {
      const selectedPlace = this.showFiveItems[this.mainCard]
      return selectedPlace
    }
  },
  data: () => {
    return {
      searchTerm: null,
      showFiveItems: [],
      allPlaces: [],
      startIndex: 0,
      mainCard: 2,
      startScroll: false,
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
      this.startScroll = true
      if ((this.startIndex + 5) > places.length - 1) {
        if (this.mainCard === 4) return
        return this.mainCard = this.mainCard + 1
      }
      if (this.mainCard < 2) return this.mainCard = this.mainCard + 1
      // setTimeout(() => {
        this.startIndex = this.startIndex + 1

        const itemRender = places.slice(this.startIndex, this.startIndex + 5)

        this.showFiveItems = itemRender
        this.startScroll = false
      // }, 300);
    },
    lefttMove() {
      if (this.startIndex === 0) {
        if (this.mainCard === 0) return
        return this.mainCard = this.mainCard - 1
      }
      if (this.mainCard > 2) return this.mainCard = this.mainCard - 1

      this.startIndex = this.startIndex - 1

      const itemRender = places.slice(this.startIndex, this.startIndex + 5)

      this.showFiveItems = itemRender
    },
    openMapsUrl(url) {
      window.open(url, '_blank')
    }
  },
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
      transition: transform 1s;
      height: 500px !important;
      // outline: solid 2px whitesmoke;
      // padding: 15px !important;
    }
  }

.places-content {
  // width: 100%;
  // position: relative;
  // display: grid;
  // grid-template-columns: repeat(5, auto);
  background-color: #313131;
  padding: 15px;

  // margin: 20px 0;
  display: flex;
  justify-content: center;
  // flex-direction: column;
  align-items: center;
  .card-background {
    position: relative;
      padding: 0 2px;

      // outline: solid 2px whitesmoke;
      // transition: 2ms all;
      // transform: translateX(200px);
    // margin-left: 30px;
  }
}

.map-location {
  height: 100px;
  display: flex;
  align-items: center;

  .location-title {
    font-size: 16px;
    font-weight: bold;
  }
  .location-icon {
    margin-left: 10px;
    border: solid 2px #39b907;
    border-radius: 100%;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location-info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
}

.button-maps {
  right: 23px;
  position: absolute;
}

.right-arrow {
  position: absolute;
  background-color: #313131;
  z-index: 3;
  right: 20px;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #434343;
  }
  &:active {
    background-color: #818181;
  }

}

.left-arrow {
  position: absolute;
  background-color: #313131;
  z-index: 3;
  left: 20px;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #434343;
  }
  &:active {
    background-color: #818181;
  }
}
</style>
