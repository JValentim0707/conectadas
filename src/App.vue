<template>
  
  <v-app class="aplication">
    <!-- <v-layout class="overflow-visible" style="height: 56px;"> -->
    <v-bottom-navigation
      :value="value"
      color="primary"
      class="menu-navbar"
      v-if="$route.name !== 'home'"
    >
    <div class="menu-items">
      <v-btn 
        v-for="(item, i) in menuNavItem" :key="i"
        v-bind:class="{ 'active-item' : getMenuIsActive(item)}"
        @click="$router.push(item.path)"
      >
        <span>{{item.title}}</span>
      </v-btn>
    </div>
    <div class="pr-2" @click="drawer = !drawer"><v-icon color="white">fa-solid fa-bars</v-icon></div>
    </v-bottom-navigation>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <div class="d-flex justify-center pa-5">
        <v-img
        lazy-src="./assets/logoOriginal.png"
        src="./assets/logoOriginal.png"
        max-width="100"
        ></v-img>
      </div>
      <v-divider></v-divider>
      <div v-for="(item, i) in menuNavItem" :key="i" v-bind:class="{ 'active-item' : getMenuIsActive(item)}">
        <div class="mobile-menu-items" @click="$router.push(item.path)">
          <v-icon color="#191919" size="20">{{ item.icon }}</v-icon>
          <div>{{ item.title }}</div>
        </div>
      </div>

      <!-- <v-btn 
        v-for="(item, i) in menuNavItem" :key="i"
        v-bind:class="{ 'active-item' : getMenuIsActive(item)}"
        @click="$router.push(item.path)"
      >
        <span>{{item.title}}</span>
      </v-btn> -->
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless color="#191919">
      <v-col
        class="text-center text-footer"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Created By Your Tcc Group</strong>
      </v-col>
  </v-footer>
  <!-- </v-layout> -->

  </v-app>
</template>

<script>

import menuItems from './config/menuItems';

export default {
  name: 'App',
  components: {
  },

  computed: {
  },

  data: () => {
    return {
      menuNavItem: menuItems,
      drawer: false,
    }
  },

  mounted() {
    console.log('dale', this.$route)
  },

  methods: {
    getMenuIsActive(menuItem) {
      console.log('test', this.$route)

      return this.$route.path === menuItem.path
    }
  }

};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@800&family=Itim&display=swap');
@import './scss//variables';

.aplication {
  display: flex;
  font-family: 'Inconsolata', monospace !important;
  font-family: 'Itim', cursive !important;
  width: 100%;
  .logo {
    z-index: 3;
    position: absolute;
    margin-top: 10px;
  }
  .v-bottom-navigation {
    background-color: #191919;
    .v-btn {
      background-color: #191919;
      span {
        color: whitesmoke;
      }
    }
  }
  // font-weight: bold;
}

.menu-navbar {
  display: flex;
  align-items: center;
  justify-content: end !important;
  .menu-items {
    display: flex;
  }
  span {
    font-size: 14px;
  }
  @media screen {
    @media (max-width: $mobile-screen) {
      .menu-items {
        display: none;
      }
    } 
  }
}

.active-item {
  border-bottom: solid whitesmoke 2px;
  @media screen {
    @media (max-width: $mobile-screen) {
      background-color: #9802B8 ;
      color: white;
      i {
        color: whitesmoke !important;
      }
    } 
  }
}

.mobile-menu-items {
  display: flex;
  padding: 16px;
  i {
    margin-right: 8px;
  }
  &:hover {
    background-color: rgb(224, 224, 224);
  }
}

.text-footer {
  color: white;
}
</style>
