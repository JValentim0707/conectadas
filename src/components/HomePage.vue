<template>
  <div class="container-wrapper">
    <div>
      <v-img
        class="image-background"
        lazy-src="../assets/BackgroundImage.png"
        src="../assets/BackgroundImage.jpg"
      ></v-img>
      <div class="content-home">
        <div class="header">
          <div>
            <v-img
              lazy-src="../assets/logo.png"
              src="../assets/logo.png"
              width="130"
            ></v-img>
          </div>
          <div class="menu">
            <div class="d-flex menu-item" v-for="(item, i) in menuOptions" :key="item"> 
              <div class="item-text" @click="$router.push(item.path)">{{ item.text }}</div> 
              <div v-if="menuOptions.length !== i + 1" class="divider"></div>
            </div>

          </div>
        </div>
        <div class="d-flex flex-column justify-center align-center" style="height: 100%;">
          <div class="d-flex flex-column justify-start">
            <div class="title">Example Text for Design For Site</div>
            <div class="description">ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium et ante vitae aliquet.</div>
          </div>
          <v-btn @click="$router.push('/locais')" class="mt-2" dark color="#9802B8" max-width="120" elevation="2">Discovery</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    // msg: String
  },
  data: () => {
    return {
      menuOptions: [
        {
          text: 'Locais Capacitação',
          path: '/locais'
        },
        {
          text: 'Ajuda',
          path: 'ajuda'
        },
        {
          text: 'Sobre Nós',
          path: 'sobre'
        },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-background {
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.header {
  width: 100%;
  display: flex;
  .menu {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2;
    margin-top: 50px;
    justify-content: center;
    width: 100%;
    .menu-item {
      cursor: pointer;
      .item-text {
        padding: 5px;
        border-radius: 10px;
        &:hover {
          background-color: #434343;
        }
        &:active {
          background-color: #818181;
        }
      }
    }
    .divider {
      height: 24px;
      background: white;
      width: 2px;
      margin-top: 5px;
      margin-left: 4px;
      margin-right: 4px;
      // margin: 0px 10px 0px 10px;
    }
  }
}

.title {
  font-family: 'Inconsolata', monospace !important;
  font-family: 'Itim', cursive !important;
  font-weight: bold;
  font-size: 46px !important;
}
.description {
  max-width: 500px;
  font-size: 20px;
  margin-left: 4px;
  margin-top: 4px;
}

.content-home {
  background-color: #1e1e1ec0;
  color: whitesmoke;
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
