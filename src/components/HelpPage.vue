<template>
  <div class="container-wrapper container-content">
    <!-- <div> -->
      <div class="image-card">
        <div>
          <div>Esta Precisando de Ajuda ?</div>
          <div>Nossa Equipe esta aqui para o que precisar!</div>
        </div>
      </div>
      <div class="image-about">
        <v-img
          lazy-src="../assets/womensgroup.jpeg"
          src="../assets/womensgroup.jpeg"
          max-width="100%"
          min-height="100%"
        ></v-img>
      </div>
    <!-- </div> -->
    <div class="content-form">
      <div>
        <v-img
        lazy-src="../assets/newLogo.png"
        src="../assets/newLogo.png"
        width="200"
        ></v-img>
      </div>
      <div class="form-card-box">
        <div>
          <v-text-field
          label="Email"
          outlined
          dark
          v-model="email"
          ></v-text-field>
          <v-text-field
          label="Telefone"
          outlined
          dark
          v-model="phone"
          ></v-text-field>
          <v-textarea
          outlined
          name="input-7-4"
          dark
          label="Description"
          v-model="description"
          ></v-textarea>
        </div>
        <v-btn elevation="2" color="#9802B8" dark @click="sendForm">Enviar</v-btn>
      </div>
    </div>
    <v-dialog
      v-model="success"
      width="400"
    >

      <v-card min-width="200px">
        <div class="alert-about">
          <div class="alert-content">
            <v-icon color="white" size="80" class="mb-4">fa-regular fa-circle-check</v-icon>
            <div> Enviado com Sucesso</div>
            <div> em Breve entraremos em contato</div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
  
</template>

<script>
export default {
  name: 'HelpPage',
  props: {
    // msg: String
  },
  watch: {
    success() {
      setTimeout(() => {
        this.success = false
      }, "3000");
    }
  },
  data: () => {
    return {
      phone: null,
      email: null,
      description: null,
      success: false
    }
  },

  methods: {
    sendForm() {
      this.success = true
      this.phone = null
      this.description = null
      this.email = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/variables';

.container-content {
  display: flex;
  @media screen {
      @media (max-width: $mobile-screen) {
        flex-direction: column;
      }
    }
}

.image-container {
  width: 100%;
  height: 100%;
}
.image-about {
  width: 50%;
  @media screen {
      @media (max-width: $mobile-screen) {
        width: 100%;
        .v-image {
          height: 400px !important;
        }
      }
    }
}
.image-card {
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  position: absolute;
  z-index: 2;
  background-color: #ab3dc3c1;
  font-size: 28px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: whitesmoke;

  @media screen {
      @media (max-width: $mobile-screen) {
        width: 100%;
        font-size: 20px;
        text-align: center;
        padding: 12px;;
        height: 400px;
      }
    }
}
.content-text {
  height: 100%;
  width: 100%;
}
.content-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-card-box {
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
    min-width: 400px;
    background-color: #191919;
    border-radius: 10px;
  }
  @media screen {
      @media (max-width: $mobile-screen) {

        .v-image {
          margin-top: 20px;
        }
        .form-card-box {
          min-width: 100%;
          border-radius: 0px;
        }
      }
    }
}

.alert-about {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .alert-content {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 300px;
    background-color: #6CB802;
    // border-radius: 10px;
    color: white;
    font-size: 16px;
  }
}
</style>
