<template>
  <div class="container">
    <h1>Secret</h1>

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

export default {
    name: 'Secret',
    data() {
      return {
        secrets: ""
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

<style>

  h1,
  h5{
    color: white;
  }
</style>