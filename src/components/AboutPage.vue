<template>
  <div class="container-wrapper">
    <div class="container-content">
      <div class="container-text">
        <div>Bem Vindos a Conectadas, um pouquinho sobre nos, ajudamos as mulheres ingressar na sua carreira Profissional</div>
      </div>
      <div class="content-image">
        <v-img
          lazy-src="../assets/womans-group.jpg"
          src="../assets/womans-group.jpg"
          max-width="100%"
          height="100%"
        ></v-img>
      </div>
    </div>
    <div class="content-main">
      <div class="first-box"><div>Sobre Nós</div></div>
      <div class="box-content">
        <div>
          O projeto conectadas foi realizado por alunos do técnico de administração da instituição Etec. Ele tem como objetivo ajudar as mulheres a serem inseridas no mercado de trabalho com mais conhecimentos técnicos e comportamentais. Afim de alavancar suas carreiras contando com o nosso auxílio.
          Aqui você encontra lugares propícios para aprimorar as suas habilidades através de cursos Eads e presenciais que podem ser realizados por qualquer pessoa.
          Queremos trazer informações para que assim você possa se sentir mais confiante no mercado de trabalho.
        </div>
      </div>
      <div class="second-box"></div>
    </div>
    <div class="container-content">
      <div class="container-text dark-purple">
        <div> Nossa Equipe é feita por 6 pessoas dando o seu melhor pra entregar pra vocês mulheres uma melhor experiencia proficional.</div>
      </div>
      <div class="content-image">
        <v-img
          lazy-src="../assets/coworking.jpg"
          src="../assets/coworking.jpg"
          max-width="100%"
          height="100%"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  props: {
    // msg: String
  },
  data: () => {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/variables';
.container-content{
 display: flex;
 widows: 100%;
 height: 500px;
 .container-text {
  display: flex;
  width: 50%;
  height: 100%;
  background-color: #9802B8;
  justify-content: center;
  align-items: center;
  color: white;
  div {
    width: 400px !important;
    font-size: 22px;
    text-align: justify;
  }
 }

 .dark-purple {
  background-color: #2E0138 !important;
 }
 .content-image {
  width: 50%;
 }
 @media screen {
    @media (max-width: $mobile-screen) {
      flex-direction: column;
      .container-text {
        width: 100%;
        padding: 12px;
        div {
          font-size: 16px;
          text-align: center;
        }
      }
      .content-image {
        width: 100%;
      }
      // justify-content: center !important;
      // margin-top: 12px;
    } 
  }
}
.content-main {
width: 100%;
display: flex;
justify-content: space-between;

  .first-box {
    background-color: #6D0185;
    min-width: 350px;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      color: white;
      font-weight: bold;
      font-size: 60px;
      writing-mode: vertical-rl ;
      transform: rotate(180deg);
    }
  }

  .box-content {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      max-width: 400px;
      font-size: 20px;
      text-align: justify;
    }
  }

  .second-box {
    background-color: #AB3DC3;
    min-width: 350px;
    height: 800px;
  }

  @media screen {
    @media (max-width: $mobile-screen) {
      flex-direction: column;
      .first-box {
        min-width: auto;
        height: 120px;
        width: 100%;
        div {
          writing-mode: horizontal-tb;
          transform: none;
          font-size: 30px;;
          // padding: 20px;
        }
      }
      .box-content {
        div {
          width: 100%;
          max-width: 100% !important;
          font-size: 16px;
          padding: 25px;
          text-align: center;
        }
      }
      .second-box {
        min-width: auto;
        height: 120px;
      }
    } 
  }
}
</style>
