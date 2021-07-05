<template>
  <div class="container home__wrapper">
    <Nav />
    <div class="row col-8 m-auto pb-2 d-flex justify-content-between border-bottom align-items-center">
    <b-breadcrumb :items="items"></b-breadcrumb>
      <div class="col-4 d-flex justify-content-start align-items-center">
        <b-icon-card-list font-scale="2" class="bg__teal"></b-icon-card-list> 
        &nbsp;Listado de Softwares
      </div>
      <div class="col-4 d-flex justify-content-end">
        <b-button><b-icon-plus></b-icon-plus> Agregar nuevo</b-button>
      </div>
    </div>
    <div class="my-5" v-for="secret in secrets" :key="secret.id">
      <img class="rounded" v-bind:src="secret.avatar" alt="">
      <h5 class="pt-3">{{secret.first_name}} {{secret.last_name}}</h5>
      <code>{{secret.email}}</code>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import Nav from '../components/Nav.vue'

export default {
    name: 'Secret',
    components: {
      Nav
    },
    data() {
      return {
        secrets: "",
        items: [
          {
            text: 'Listado de Softwares',
            href: '/secret'
          }
        ]
      }
    },
    async created() {
      const token = await firebase.auth().currentUser.getIdToken();
      console.log(token);
      
      let result = await this.$axios.get('https://reqres.in/api/users?page=2');

      this.secrets = result.data.data;
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
</style>