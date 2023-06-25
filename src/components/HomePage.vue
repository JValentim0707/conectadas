<template>
  <div class="container-wrapper">
    <div>
      <v-img
        class="image-background"
        lazy-src="../assets/BackgroundImage.jpg"
        src="../assets/BackgroundImage.jpg"
      ></v-img>
      <div class="content-home">
        <div class="header">
          <div>
            <v-img
              lazy-src="../assets/newLogo.png"
              src="../assets/newLogo.png"
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
        <div class="message-home" style="height: 100%;">
          <div class="d-flex flex-column justify-start">
            <div class="title">Mulheres Conectadas</div>
            <div class="description">E se todas as mulheres pudessem prosperar no ambiente de trabalho com oportunidades equânimes?</div>
          </div>
          <v-btn @click="$router.push('/locais')" class="mt-2" dark color="#9802B8" max-width="120" elevation="2">Descubra</v-btn>
        </div>
      </div>
      <div class="pillars">
        <div class="card-pilar pillar-one">
          <div class="title-pillar">Missão</div>
          <div class="content-pillar">
            <div class="number">1</div>
            <div class="pillar-description">
              Missão: Capacitar e empoderar mulheres para que elas possam alcançar seu pleno potencial no mercado de trabalho, fornecendo-lhes as habilidades, conhecimentos e suporte necessários para prosperar em suas carreiras.
            </div>
          </div>
        </div>
        <div class="card-pilar pillar-two">
          <div class="title-pillar">Visão</div>
          <div class="content-pillar">
            <div class="number">2</div>
            <div class="pillar-description">
              O projeto conectadas busca alavancar carreiras e trazer desenvolvimento profissional e pessoal para a comunidade, visando a melhoria na qualidade de vida de nossos(as) seguidores(as) por meio de inovação, informação e solução.
            </div>
          </div>
        </div>
        <div class="card-pilar pillar-three">
          <div class="title-pillar">Valores</div>
          <div class="content-pillar">
            <div class="number">3</div>
            <div class="pillar-description">
              Capacitação e desenvolvimento humano Compromisso com o futuro de nossos seguidores Respeito a diversidade
            </div>
          </div>
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
          text: 'Instituiçōes',
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
@import '../scss/variables';
.image-background {
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.header {
  width: 100%;
  padding: 20px;
  // margin-left: 20px;
  display: flex;

  @media screen {
      @media (max-width: $mobile-screen) {
        justify-content: center !important;
        margin-top: 12px;
        .v-image {
          width: 100px !important;
        }
      } 
    }
  .menu {
    display: flex;
    align-items: center;
    position: absolute;
    z-index: 2;
    margin-top: 20px;
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
    @media screen {
      @media (max-width: $mobile-screen) {
        // color: red;
        margin-top: 70px;
      }
      
    }
  }

}

.message-home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen {
      @media (max-width: $mobile-screen) {
        // color: red;
        font-size: 30px !important;
      }
      
    }

  .title {
    font-family: 'Inconsolata', monospace !important;
    font-family: 'Itim', cursive !important;
    font-weight: bold;
    font-size: 46px !important;
    @media screen {
      @media (max-width: $mobile-screen) {
        // color: red;
        text-align: center;
        font-size: 30px !important;
      }
      
    }
  }

  .description {
    max-width: 500px;
    font-size: 20px;
    margin-left: 4px;
    margin-top: 4px;
    @media screen {
      @media (max-width: $mobile-screen) {
        // color: red;
        text-align: center;
        font-size: 14px !important;
      }
    }
  }
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
.pillars {
  display: flex;
  width: 100%;

  .card-pilar {
    width: 100%;
    display: flex;
    flex-direction: column;
    .title-pillar {
      display: flex;
      justify-content: center;
      font-size: 28px;
      align-items: center;
      color: white;
    }

    .content-pillar {
      display: flex;
      align-items: center;
      .pillar-description {
        color: white;
        font-size: 16px;
        text-align: center;
        padding: 0px 80px;
        text-align: justify;
      }
    }
    .number {
      font-size: 200px;
      margin-left: 12px;
    }
  }
  .pillar-one {
    background-color: #9802B8;
    .number {
      color: #AD04D1;
    }
  }
  .pillar-two {
    background-color: #6D0185;
    .number {
      color: #82019f;
    }
  }
  .pillar-three {
    background-color: #2E0138;
    .number {
      color: #480058;
    }
  }
  @media screen {
      @media (max-width: $mobile-screen) {
        flex-direction: column;
        .pillar-description {
          padding: 0px 20px !important;

        }
      }
    }
}
</style>
