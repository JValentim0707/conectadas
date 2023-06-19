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
            v-model="selectedCity"
            :items="avaiblesCities"
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
          <div class="cards-list" v-if="filteredArray.length > 0">
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
          <div v-if="filteredArray.length > 0" class="places-list">
            <div class="list-header">
              <v-icon color="white" class="ml-4" size="16">fa-solid fa-globe</v-icon>
              <div class="ml-2">Estabelecimentos</div>
            </div>
            <ListPlaces v-for="(card , i) in allPlaces" :key="i" :title="card.title" :image="card.fileName" ></ListPlaces>
          </div>
          <div v-else class="not-found"> 
            <div class="d-flex flex-column">
              <v-icon color="white" size="50">fa-face-frown</v-icon>
              <div>Desculpe não encontramos</div>
              <div>Oque você Procura</div>
            </div>
          </div>
        </div>
        <div class="place-infos">
          <div class="image-location-container" v-if="selectedCard">
            <v-img
            :lazy-src="require(`../assets/${selectedCard.fileName}`)"
            :src="require(`../assets/${selectedCard.fileName}`)"
            min-width="35%" 
            max-width="500px"
            height="300px"
            ></v-img>
            <div class="overview-info">
              <div class="overview-title">Visão Geral</div>
              <div class="divider-item"></div>
              <div class="overview-content">
                <div class="d-flex">
                  <div class="overview-label">Nome</div>
                  <div class="overview-text">{{ selectedCard.title }}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label">Cidade</div>
                  <div class="overview-text">{{selectedCard.city}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label">Telefone</div>
                  <div class="overview-text">{{selectedCard.phone}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label">Endereço</div>
                  <div class="overview-text">{{selectedCard.address}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label">CEP</div>
                  <div class="overview-text">{{selectedCard.postcode}}</div>
                </div>
              </div>
              <a class="d-flex justify-center mb-2" href=" https://www.vestibularfatec.com.br/home/ ">https://www.vestibularfatec.com.br/home/</a>
            </div>
          </div>
          <div class="local-content" v-if="selectedCard">
            <div class="d-flex">

              <div class="local-content-title">{{ selectedCard.fullTitle}}</div>
              <div class="location-icon" @click="openMapsUrl(selectedCard.url)" ><v-icon color="#ff5a4e">fa-solid fa-location-dot</v-icon></div>
            </div>

            <v-expansion-panels v-for="(section, i) in selectedCard.sections" :key="i" class="section-infos">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="section-header">{{ section.sectionTitle }}</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div>
                  <div class="section-subtitle">{{ section.subtitle }}</div>
                  <div>{{ section.text }}</div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          </div>
          <div class="not-found not-found-dark" v-if="!selectedCard">
            <div class="d-flex flex-column">
              <v-icon color="#191919" size="50">fa-map-pin</v-icon>
              <div>Porfavor Selecione um Local</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardPlaces from './utility/CardPlaces.vue'
import ListPlaces from './utility/ListPlaces.vue'
import places from '../config/places'


export default {
  name: 'PlacesLearning',
  props: {
    // msg: String,
  },
  components: {
    CardPlaces,
    ListPlaces
  },
  computed: {
    selectedCard() {
      const selectedPlace = this.showFiveItems[this.mainCard]
      return selectedPlace || null
    },
    totalPlaces() {
      return places.filter(x => x.title.toLowerCase().includes(this.searchTerm.toLowerCase())).length
      // return places.filter(x => x.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())).length
    },
    filteredArray() {
      const filteredBySearch = places.filter(x => x.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))
      if (this.selectedCity !== '' && this.selectedCity) return filteredBySearch.filter(x => x.city === this.selectedCity)
      return filteredBySearch

    },
    avaiblesCities() {
      if (this.filteredArray) return places.map(x => x.city)
      return this.filteredArray.map(x => x.city)
    }
  },
  watch: {
    searchTerm() {
      // const filterArray = places.filter(x => x.title.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase()))
      this.startIndex = 0
      if (this.filteredArray.length === 0) this.showFiveItems = []
      this.showFiveItems = this.filteredArray.slice(0, 5)

      if (this.showFiveItems.length % 2 > 0) this.mainCard = Math.floor(this.showFiveItems.length / 2)
      else if (this.showFiveItems.length % 2 === 0) this.mainCard = this.showFiveItems.length / 2

      else this.mainCard = this.showFiveItems.length - 1
    },
    selectedCity() {
      this.startIndex = 0
      if (!this.selectedCity || this.selectedCity === '') return this.showFiveItems = this.filteredArray.slice(0, 5)

      const filteredByCity = this.filteredArray.filter(x => x.city === this.selectedCity)
      this.showFiveItems = filteredByCity.slice(0, 5)

      if (this.showFiveItems.length % 2 > 0) this.mainCard = Math.floor(this.showFiveItems.length / 2)
      else if (this.showFiveItems.length % 2 === 0) this.mainCard = this.showFiveItems.length / 2

      else this.mainCard = this.showFiveItems.length - 1
    }
  },
  data: () => {
    return {
      searchTerm: '',
      selectedCity: '',
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
      if (this.mainCard === this.filteredArray.length - 1) return
      if ((this.startIndex +  this.filteredArray.length - 1) > this.filteredArray.length - 1) {
        if (this.mainCard === 4) return
        return this.mainCard = this.mainCard + 1
      }
      if (this.mainCard < 2) return this.mainCard = this.mainCard + 1
      // setTimeout(() => {
        this.startIndex = this.startIndex + 1

        const itemRender = this.filteredArray.slice(this.startIndex, this.startIndex + 5)

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

      const itemRender = this.filteredArray.slice(this.startIndex, this.startIndex + 5)

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
@import '../scss/variables';
.background {
  background-color: whitesmoke;
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

  @media screen {
      @media (max-width: $mobile-screen) {
        flex-direction: column;
        .city-select {
          min-width: 100% !important;
          padding: 0px 18px;
        }
        .search-input {
          min-width: 100% !important;
          padding: 0px 18px;
        }
      } 
    }
}

.divider-item {
  display: flex;
  width: 100%;
  background-color: #191919;
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

  .cards-list {
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
  }

  @media screen {
      @media (max-width: $mobile-screen) {
        overflow-x: auto;
        max-height: 500px;
        padding-left: 0px;
        .cards-list {
          display: none !important;
        }

        .header-slidder {
          display: none;
        }
      } 
    }
}

.place-infos {
  display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 70px;

  .overview-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    border: solid 2px #191919;
    margin-top: 20px;
    border-radius: 10px;
    max-width: 500px;

    .overview-title {
      padding: 8px;
      display: flex;
      width: 100%;
      justify-content: center;
      color: #191919;
      font-size: 19px;
      font-weight: bold;
      text-align: center;
    }

    .overview-content{
      display: flex;
      flex-direction: column;
      padding: 15px;
      .overview-label {
        font-weight: bold;
        font-size: 16px;
        margin-right: 8px;
        margin-bottom: 8px;
      }
      .overview-text {
        font-size: 16px;
      }
    }
  }

  .image-location-container ::v-deep {
    min-width: 10%;
    // max-height: 100%;
    .v-image__image {
      border-radius: 10px;
      // filter: blur(3px);
    }
  }

  .local-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 50px;
    .local-content-title {
      display: flex;
      align-items: center;
      font-size: 22px;
      font-weight: bold;
      padding: 12px;
      background-color: #191919;
      height: 50px;
      color: whitesmoke;
      width: 100%;
      border-radius: 10px;
    }

    .section-infos {
      margin-top: 12px;
      margin-bottom: 12px;
      .section-header {
        font-size: 23px;
      }

      .section-subtitle {
        font-weight: bold;
        font-size: 18px;
      }
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
    height: 50px;
    border-radius: 10px;
    width: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgb(221, 221, 221);
    }
    &:active {
      background-color: rgb(171, 171, 171);
    }
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
  align-items: baseline;

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
.not-found {
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;
  div {
    color: white;
    font-size: 29px;
    text-align: center;
  }
}
.not-found-dark {
  div {
    color: #191919 !important;
  }
}

.places-list {
  display: none;
  width: 100%;
  height: 500px;
  flex-direction: column;
  &:first-child {
    margin-top: 500px;
  }
  .list-header {
    color: whitesmoke;
    display: flex;
    padding: 12px 0px;
  }
  @media screen {
      @media (max-width: $mobile-screen) {
        display: flex;
      } 
    }
}
</style>
