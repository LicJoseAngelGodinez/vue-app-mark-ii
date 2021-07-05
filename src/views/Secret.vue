<template>
  <div class="container home__wrapper">
    <Nav />
    <div class="row col-lg-8 mx-auto d-flex justify-content-between border__bottom align-items-center">
      <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>
      <div class="col-12 col-md-4 col-lg-4 d-md-flex d-lg-flex justify-content-start align-items-center">
        <b-icon-card-list font-scale="2" class="bg__teal"></b-icon-card-list> 
        &nbsp;Listado de Softwares
      </div>
      <div class="col-12 col-md-4 col-lg-4 d-md-flex d-lg-flex justify-content-end">
        <b-button class="btn__t"><b-icon-plus></b-icon-plus> Agregar nuevo</b-button>
      </div>
    </div>
    <b-row class="col-lg-8 m-auto mt-4">
      <div class="col-12 mb-3 d-flex justify-content-start align-items-center item__wrapper flex-nowrap" v-for="secret in secrets" :key="secret.id">
        <div class="col-3 d-flex justify-content-start align-items-center">
          <span class="item__number">{{secret.id}}</span>
          <span class="item__title">{{secret.name}}</span>
        </div>
        <div class="col-3">
          <span class="item__type">{{secret.type}}</span>
        </div>
        <div class="float-right ms-auto item__icon" @click="showDetail">
          <b-icon-chevron-right></b-icon-chevron-right>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
// import firebase from "firebase/app"
// import "firebase/auth"
import Nav from '../components/Nav.vue'

export default {
    name: 'Secret',
    components: {
      Nav
    },
    data() {
      return {
        secrets: [
          {
            id: '01',
            name: 'Siebel',
            type: 'Crédito Grupal'
          },
          {
            id: '02',
            name: 'Bantotal',
            type: 'Crédito Grupal'
          },
          {
            id: '03',
            name: 'Mobilender',
            type: 'Crédito Grupal'
          },
          {
            id: '04',
            name: 'Alivio',
            type: 'Crédito Grupal'
          },
          {
            id: '05',
            name: 'Ítaca Capital',
            type: 'Crédito Grupal'
          }
        ],
        breadcrumb_items: [
          {
            text: 'Listado de Softwares',
            href: '/secret'
          }
        ]
      }
    },
    // async created() {
    //   // const token = await firebase.auth().currentUser.getIdToken();
    //   // console.log(token);
      
    //   let result = await this.$axios.get('https://reqres.in/api/users?page=2');

    //   this.secrets = result.data.data;
    // },
    methods: {
      showDetail() {
        this.$router.replace({ name: 'Home'});
      }
    }
}
</script>

<style lang="scss">

  $color-deep-dark: black;
  $color-dark: #171925;
  $color-light-dark: #262d30;
  $color-white: #fdfcfc;
  $color-teal: #71f8b3;
  $color-teal-arrow: #74f6b9;
  $color-initials: #f0f4f7; 
  $color-accepted: #61b792; 
  $color-rejected: #782035; 
  $color-inprocess: #c09552; 
  $color-gray-title: #7e828b;
  $color-breadcrumb: #a2a3a8;
  $color-breadcrumb-selected: #65686f;
  $color-error: red;

  h1,
  h5{
    color: white;
  }

  .home__wrapper {
    padding-top: 5rem;
  }

  .bg__teal {
    background: $color-teal;
    color: $color-deep-dark;
    padding: 1px 3px;
    border-radius: 5px;
  }

  .btn__t {
    background-color: $color-dark !important;
    border: 3px solid $color-teal !important;
    color: $color-white !important;
    &:hover{
      background-color: $color-teal !important;
      color: $color-deep-dark !important;
    }
  }

  .item__wrapper {
    background-color: $color-dark;
    border-radius: 8px;
    padding: 1rem 2px;
  }

  .item__number {
    border-radius: 5px;
    padding: .5rem .8rem;
    background-color: $color-light-dark;
    font-weight: bold;
    border: 3px solid $color-teal;
  }

  .item__title,
  .item__type {
    font-weight: bold;
    padding-left: 1rem;
  }

  .item__title {    
    font-size: 1.2rem;
  }

  .item__type {
    font-size: .8rem;
    color: $color-gray-title;
  }

  .border__bottom {
    border-bottom: 1px solid $color-light-dark;
    padding-bottom: 1.5rem
  }

  .item__icon {
    margin-right: 1rem;
    cursor: pointer;
    padding: 5px;
    &:hover {
      background-color: $color-teal;
      color: black;
      border-radius: 5px;
    }
  }
</style>