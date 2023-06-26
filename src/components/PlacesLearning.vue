<template>
  <div class="container-wrapper">
    <div class="background">
      <div class="d-flex flex-column">
        <div class="header-location">
          <div class="title-page">Locais de Capacitação</div>
          <div class="total-text">Locais Achados: {{ filteredArray.length }}</div>
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
          <div class="clear-button">
            <v-btn color="#9802B8" dark class="ml-3" heigth="40px" @click="clearFilters">
              <v-icon color="white" size="14" class="mr-2">fa-solid fa-trash</v-icon>
              <div>Limpar</div>
            </v-btn>
          </div>
        </div> 
        <div class="places-content">
          <div class="header-slidder">
            <v-icon color="white" class="ml-4">fa-solid fa-globe</v-icon>
            <div class="ml-2">Estabelecimentos</div>
          </div>
          <div class="cards-list" v-if="filteredArray.length > 0">
            <div v-for="(card , i) in showFiveItems" 
              :key="i" :title="card" 
              v-bind:class="{ 'main-card' : getMainCard(i)}"
              @click="selectedCardOnClick(i)"
              >
              <CardPlaces :image="card.fileName" :title="card.title" :description="card.description"/>
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
            <div v-for="(card , i) in filteredArray" :key="i" @click="selectedMobile(i)">
              <ListPlaces v-bind:class="{ 'selected-item' : selectedEntity.id === card.id }" :title="card.title" :image="card.fileName" @click="selectedMobile(i)"></ListPlaces>
            </div>
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
                <div class="d-flex" v-if="selectedCard.title && selectedCard.title !== ''">
                  <div class="overview-label">Nome</div>
                  <div class="overview-text">{{ selectedCard.title }}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label" v-if="selectedCard.city && selectedCard.city !== ''">Cidade</div>
                  <div class="overview-text">{{selectedCard.city}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label" v-if="selectedCard.phone && selectedCard.phone !== ''">Telefone</div>
                  <div class="overview-text">{{selectedCard.phone}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label" v-if="selectedCard.address && selectedCard.address !== ''">Endereço</div>
                  <div class="overview-text">{{selectedCard.address}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label" v-if="selectedCard.postcode && selectedCard.postcode !== ''">CEP</div>
                  <div class="overview-text">{{selectedCard.postcode}}</div>
                </div>
                <div class="d-flex">
                  <div class="overview-label" v-if="selectedCard.format && selectedCard.format !== ''">Formato</div>
                  <div class="overview-text">{{selectedCard.format}}</div>
                </div>
              </div>
              <a class="d-flex justify-center mb-2" v-if="selectedCard.website && selectedCard.website !== ''" :href="selectedCard.website">{{ selectedCard.website }}</a>
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
              <div class="divider-item"></div>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels class="section-infos" v-if="units.length > 0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="section-header">Outras Unidades</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table height="400" v-if="units.length > 0">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Unidade
                        </th>
                        <th class="text-left" >
                          Cidade
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in units"
                        :key="item"
                      >
                        <td>{{ item.name }}</td>
                        <td v-if="item.city">{{ item.city }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div class="not-found not-found-list" v-else>
                  <div class="d-flex flex-column">
                    <v-icon color="#191919" size="40">fa-regular fa-face-frown</v-icon>
                    <div>Desculpe nao conseguimos Encontrar informaçōes!</div>
                  </div>
                </div>
                <!-- <div> -->
                  <!-- <div class="section-subtitle">{{ section.subtitle }}</div>
                  <div>{{ section.text }}</div>
                </div> -->
              </v-expansion-panel-content>
              <div class="divider-item"></div>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels class="section-infos"  v-if="courses.length > 0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="section-header">Cursos</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table height="400" v-if="courses.length > 0">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Curso
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in courses"
                        :key="item"
                      >
                        <td>{{ item }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div class="not-found not-found-list" v-else>
                  <div class="d-flex flex-column">
                    <v-icon color="#191919" size="40">fa-regular fa-face-frown</v-icon>
                    <div>Desculpe nao conseguimos Encontrar informaçōes!</div>
                  </div>
                </div>
              </v-expansion-panel-content>
              <div class="divider-item"></div>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels class="section-infos"  v-if="technicalCourses && technicalCourses.length > 0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="section-header">Cursos Tecnicos</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table height="400" v-if="technicalCourses && technicalCourses.length > 0">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Curso
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in technicalCourses"
                        :key="item"
                      >
                        <td>{{ item }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div class="not-found not-found-list" v-else>
                  <div class="d-flex flex-column">
                    <v-icon color="#191919" size="40">fa-regular fa-face-frown</v-icon>
                    <div>Desculpe nao conseguimos Encontrar informaçōes!</div>
                  </div>
                </div>
              </v-expansion-panel-content>
              <div class="divider-item"></div>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels class="section-infos"  v-if="graduationCourses && graduationCourses.length > 0">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="section-header">Graduaçōes</div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-simple-table height="400" v-if="graduationCourses.length > 0">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          Curso
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in graduationCourses"
                        :key="item"
                      >
                        <td>{{ item }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div class="not-found not-found-list" v-else>
                  <div class="d-flex flex-column">
                    <v-icon color="#191919" size="40">fa-regular fa-face-frown</v-icon>
                    <div>Desculpe nao conseguimos Encontrar informaçōes!</div>
                  </div>
                </div>
              </v-expansion-panel-content>
              <div class="divider-item"></div>
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
import { senaiUnits } from '../config/senai'

// import { getPlaceInformation } from '../services/placeInfomation'


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
      if (this.filteredArray.length === 0) return null
      const widthPage = window.innerWidth
      if (widthPage <= 600) return this.selectedEntity || null
      const selectedPlace = this.showFiveItems[this.mainCard]
      return selectedPlace || null
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
      this.selectedEntity = this.filteredArray[0]
      this.startIndex = 0
      if (this.filteredArray.length === 0) this.showFiveItems = []
      this.showFiveItems = this.filteredArray.slice(0, 5)

      if (this.showFiveItems.length % 2 > 0) this.mainCard = Math.floor(this.showFiveItems.length / 2)
      else if (this.showFiveItems.length % 2 === 0) this.mainCard = this.showFiveItems.length / 2

      else this.mainCard = this.showFiveItems.length - 1
    },
    selectedCity() {
      this.selectedEntity = this.filteredArray[0]
      this.startIndex = 0
      if (!this.selectedCity || this.selectedCity === '') return this.showFiveItems = this.filteredArray.slice(0, 5)

      const filteredByCity = this.filteredArray.filter(x => x.city === this.selectedCity)
      this.showFiveItems = filteredByCity.slice(0, 5)

      if (this.showFiveItems.length % 2 > 0) this.mainCard = Math.floor(this.showFiveItems.length / 2)
      else if (this.showFiveItems.length % 2 === 0) this.mainCard = this.showFiveItems.length / 2

      else this.mainCard = this.showFiveItems.length - 1
    },
    selectedCard() {
      this.units = this.selectedCard.units || []
      this.courses = this.selectedCard.courses || []
      this.technicalCourses = this.selectedCard.technicalCourses || []
      this.graduationCourses = this.selectedCard.graduationCourses || []
    }
  },
  data: () => {
    return {
      searchTerm: '',
      selectedCity: '',
      citySelected: null,
      cities: [],
      showFiveItems: [],
      units: [],
      courses: [],
      technicalCourses: [],
      graduationCourses: [],
      allPlaces: places,
      startIndex: 0,
      mainCard: 2,
      startScroll: false,
      selectedEntity: null,
    }
  },
  async mounted() {
    this.showFiveItems = this.getFiveItems()
    this.selectedEntity = places[0]

    const newArray = []

    senaiUnits.forEach(x => {
      const newCity = x.name.split('-')[0]
      // if (x.includes('-')) console.log('dale dole')
      // const newCity = x.split('-')
      // console.log(newCity)
      // const formatName = x.slice(0, 5)
      // console.log(formatName)
      let object = {
        name: x.name,
        city: newCity.slice(6)
      }

      newArray.push(object)
    })


    console.log('dale', newArray)
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
      console.log('dale', this.selectedCard)
      console.log('bacon', this.filteredArray)
      if (this.selectedCard.id === this.filteredArray[this.filteredArray.length - 1].id) return
      const lastItem = this.allPlaces[this.allPlaces.length - 1]

      if (this.mainCard === 4) { 
        if (this.showFiveItems.some(x => x.id === lastItem.id)) return
        this.startIndex = this.startIndex + 1
        const itemRender = this.filteredArray.slice(this.startIndex, this.startIndex + 5)
        this.showFiveItems = itemRender
        return
      }
      this.mainCard = this.mainCard + 1

      // this.startIndex = this.startIndex + 1
      // if ((this.startIndex +  5) > this.filteredArray.length - 1) {
      //   this.startIndex = this.startIndex + 1
      //   return this.mainCard = this.mainCard + 1
      // }
      // if (this.mainCard < 2) return this.mainCard = this.mainCard + 1
      //   this.startIndex = this.startIndex + 1

        const itemRender = this.filteredArray.slice(this.startIndex, this.startIndex + 5)

        this.showFiveItems = itemRender
    },
    lefttMove() {
      if (this.selectedCard.id === this.filteredArray[0].id) return
      const firstItem = this.allPlaces[0]

      if (this.mainCard === 0) {
      if (this.showFiveItems.some(x => x.id === firstItem.id)) return
        this.startIndex = this.startIndex - 1
        const itemRender = this.filteredArray.slice(this.startIndex, this.startIndex + 5)
        this.showFiveItems = itemRender
        return
      }
      
      this.mainCard = this.mainCard - 1

      const itemRender = this.filteredArray.slice(this.startIndex, this.startIndex + 5)

      this.showFiveItems = itemRender
      return
    },
    openMapsUrl(url) {
      window.open(url, '_blank')
    },
    selectedCardOnClick(index) {
      this.mainCard = index
    },
    selectedMobile(index) {
      const selectedEntity = this.filteredArray[index]
      this.selectedEntity = selectedEntity || null
    },
    clearFilters() {
      this.searchTerm = ''
      this.selectedCity = ''
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
  background-color: #9802B8;
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
  background-color: #2E0138;
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
        padding-right: 0px;
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
    height: auto;
    border: solid 2px #9802B8;
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
      background-color: #9802B8;
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
    border: solid 2px #9802B8;
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
  @media screen {
      @media (max-width: $mobile-screen) {
        flex-direction: column;
        padding: 0px;
        margin-top: 20px;
        .image-location-container ::v-deep {
          // max-height: 100%;
          .v-image__image {
            border-radius: 0px;
            // filter: blur(3px);
          }
        }
        .section-infos {
          margin: 0px !important;
        }
        .location-icon {
          margin-left: 0px;
          border-radius: 0px;
        }
        .overview-info {
          border-radius: 0px;
          color: whitesmoke;
          margin-top: 0px;
          border: none;
          background-color: #191919;
          .divider-item {
            background-color: whitesmoke !important;
          }
        }
        .overview-title {
          color: whitesmoke !important;
        }

        .local-content {
          margin-top: 12px;
          margin-left: 0px;
          .local-content-title {
            border-radius: 0px;
            font-size: 19px;
            padding-left: 8px;
          }
        }
        .section-infos ::v-deep {
          .v-expansion-panel {
            &::before {
              box-shadow: none;
            }
          }
        }
      } 
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
.not-found-list {
  height: 200px !important;
  div {
    color: #191919 !important;
    font-size: 20px;
    width: 300px;
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

.selected-item {
  background-color: #9802B8;
  color: whitesmoke;
  // border-top: solid 2px whitesmoke;
}
.clear-button {
  @media screen {
    @media (max-width: $mobile-screen) { 
      display: flex;
      justify-content: end;
      width: 100%;
      padding: 18px;
    }
  }
  .v-btn {
    height: 40px !important;
  }
}
</style>
