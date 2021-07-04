<template>
  <div class="container">
      Logged in
      <span v-if="loggedIn">Yes</span>
      <span v-else>No</span>
      <div>
          <button @click="signOut" class="btn btn-primary">Sign out</button>
      </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth";

export default {
    created() {
        firebase.auth().onAuthStateChanged( user => {
            this.loggedIn = !!user;
        });
    },
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut() {
            firebase.auth().signOut()
            .then( (response) => {
                const data = response;
                console.log(data);
                this.$router.replace({ name: 'Login' });
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    }
}
</script>


<style>

</style>