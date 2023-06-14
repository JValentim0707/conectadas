<template>
  
  <v-app class="aplication">
    <!-- <v-layout class="overflow-visible" style="height: 56px;"> -->
    <v-bottom-navigation
      :value="value"
      color="primary"
      class="menu-navbar"
      v-if="$route.name !== 'home'"
    >
      <div>
        <v-btn 
        v-for="(item, i) in menuNavItem" :key="i"
        v-bind:class="{ 'active-item' : getMenuIsActive(item)}"
        @click="$router.push(item.path)"
        >
        <span>{{item.title}}</span>
        <!-- <v-icon>mdi-home</v-icon> -->
      </v-btn>
    </div>
    </v-bottom-navigation>
    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless color="#313131">
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
    background-color: #313131;
    .v-btn {
      background-color: #313131;
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
  span {
    font-size: 14px;
  }
}

.active-item {
  border-bottom: solid whitesmoke 2px;
}

.text-footer {
  color: white;
}
</style>
