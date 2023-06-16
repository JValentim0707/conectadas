<template>
  <div class="container-wrapper">
    <div class="background">
      <div class="d-flex flex-column">
        <div class="header-location">
          <div class="title-page">Locais de Capacitação</div>
          <div class="total-text">Locais Achados: {{ totalPlaces }}</div>
        </div>
        <div class="search-container">
          <v-text-field
            class="search-input"
            v-model="searchTerm"
            label="Pesquisar"
            outlined
            dense
            append-icon="fa-search"
          ></v-text-field>
          <v-select
            class="city-select"
            :items="cities"
            label="Cidades"
            dense
            outlined
          ></v-select>
        </div> 
        <div class="places-content">
          <div class="header-slidder">
            <v-icon color="white" class="ml-4">fa-solid fa-globe</v-icon>
            <div class="ml-2">Estabelecimentos</div>
          </div>
          <div class="d-flex justify-center align-center" v>
            <div v-for="(card , i) in showFiveItems" 
              :key="i" :title="card" 
              v-bind:class="{ 'main-card' : getMainCard(i)}">
              <CardPlaces :image="card.fileName" :title="card.title"/>
            </div>
            <div @click="rightMove" class="right-arrow">
              <v-icon color="white" size="26">fa-arrow-right</v-icon>
            </div>
            <div @click="lefttMove" class="left-arrow">
              <v-icon color="white">fa-arrow-left</v-icon>
            </div>
          </div>
        </div>
        <div class="map-location">
          <div class="image-location-container">
            <v-img
            :lazy-src="require(`../assets/${selectedCard.fileName}`)"
            :src="require(`../assets/${selectedCard.fileName}`)"
            min-width="100%"
            height="700px"
            ></v-img>
          </div>
          <div class="maps-location-info">
            <div class="header-info">{{selectedCard.title}}</div>
            <div class="d-flex align-center pa-6">
              <div class="location-icon">
                <v-icon color="#191919" size="36">fa-solid fa-map-location-dot</v-icon>
              </div>
              <div class="location-info">{{ selectedCard.address }}</div>
            </div>
            <div class="divider-item"></div>
            <div class="d-flex align-center pa-6">
              <div class="location-icon">
                <v-icon color="#191919" size="36">fa-sharp fa-solid fa-phone</v-icon>
              </div>
              <div class="location-info">{{ selectedCard.phone   }}</div>
            </div>
            <div class="divider-item"></div>
          </div>
          <!-- <div></div> -->
          <!-- <div class="location-icon">
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
          </div> -->
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
    },
    totalPlaces() {
      return places.filter(x => x.title.toLowerCase().includes(this.searchTerm.toLowerCase())).length
      // return places.filter(x => x.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())).length
    }
  },
  watch: {
    searchTerm() {
      const filterArray = places.filter(x => x.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))
      this.showFiveItems = filterArray.slice(0, 5)

      if (this.showFiveItems.length % 2 > 0) this.mainCard = Math.floor(this.showFiveItems.length / 2)
      else if (this.showFiveItems.length % 2 === 0) this.mainCard = this.showFiveItems.length / 2

      else this.mainCard = this.showFiveItems.length - 1
      // this.mainCard = this.showFiveItems.length % 2 ? 
      // this.$forceUpdate()
    }
  },
  data: () => {
    return {
      searchTerm: '',
      citySelected: null,
      cities: [],
      showFiveItems: [],
      allPlaces: places,
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

  .city-select ::v-deep{
    max-width: 250px !important;
    min-width: 230px;
    .v-input {
      i {
        font-size: 18px !important;
      }
    }
  }

  .search-input ::v-deep{
    max-width: 40% !important;
    min-width: 300px;
    margin-right: 12px;
    .v-input ::v-deep {
      i {
        font-size: 12px !important;
      }
    }
  }
}

.divider-item {
  display: flex;
  width: 100%;
  background-color: black;
  height: 2px;
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
  background-color: #191919;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card-background {
    position: relative;
      padding: 0 2px;
  }

  .header-slidder {
    display: flex;
    width: 100%;
    color: white;
    div {
      font-size: 26px;
    }
  }
}

.map-location {
  display: flex;
  align-items: center;
  justify-content: center;

  .image-location-container ::v-deep {
    min-width: 100%;
    max-height: 100%;
    .v-image__image {
      filter: blur(3px);
    }
  }

  .maps-location-info {
    position: absolute;
    width: 50%;
    min-width: 750px;
    max-width: 900%;
    height: 500px;
    background-color: whitesmoke;
    border-radius: 10px;
    .header-info {
      background-color: #191919;
      border-radius: 10px 10px 0px 0px;
      color: whitesmoke;
      // text-transform: uppercase;
      font-size: 26px;
      padding: 6px 12px;
    }
  }

  .location-title {
    font-size: 16px;
    font-weight: bold;
  }
  .location-icon {
    margin-left: 10px;
    border: solid 2px #191919;
    border-radius: 100%;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .location-info {
    margin-left: 14px;
    // display: flex;
    max-width: 300px;
    // flex-direction: column;
    font-size: 18px;
    font-weight: bold;
  }
}

.button-maps {
  right: 23px;
  position: absolute;
}

.header-location { 
  display: flex;
  width: 100%;
  justify-content: space-between;

  .title-page {
    font-weight: bold;
    font-size: 20px;
    padding: 12px;
  }
  .total-text {
    font-weight: bold;
    font-size: 16px;
    padding: 12px;
  }
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
