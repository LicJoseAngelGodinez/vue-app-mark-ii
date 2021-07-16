<template>
    <div class="container col-12 col-md-6 col-lg-4 mx-auto p-4 border-t container__login">
        <h1 class="my-4">Integra <span class="text__t">Software</span></h1>
        <h3 class="my-4">Login</h3>
        <div v-if="error" class="alert alert-danger border-error" role="alert">
        {{error}}
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-row">
                <div class="form-group col-12">
                    <label for="inputEmai" class="py-2">Email</label>
                    <input @focus="clearError" v-model="email" type="email" class="form-control" placeholder="Email">
                </div>
                <div class="form-group col-12">
                    <label for="inputPassword" class="py-2">Password</label>
                    <input @focus="clearError" v-model="password" type="password" class="form-control" placeholder="Password">
                </div>
            </div>
            <button type="submit" class="btn btn-primary-t mt-4 w-100">Log in</button>
            
            <div class="register__action" @click="goToRegister">Registro</div>
        </form>
    </div>
</template>

<script>

import firebase from "firebase/app"
import "firebase/auth";

export default {
    name: 'Login',
    methods: {
        async handleSubmit() {
            if ( this.email !== '' && this.password !== '' ) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then( () => {
                    this.$router.replace({name: 'Home'});
                }).catch( (error) => {
                    this.error = error.message;
                });
            } else {
                this.error = 'faltan campos';
            }
        },
        clearError() {
            this.error = '';
        },
        goToRegister() {
            this.$router.replace({name: "Register"});
        },
    },
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "../styles/GlobalStyles.scss";

    h1,
    label,
    button {
        font-weight: bold !important;
    }

    .text__t {
        color: $color-teal;
    }

    .container__login {
        margin-top: 22vh;
    }

    .border-t{
        border-radius: 8px;
        background-color: $color-light-dark;
    }

    .btn-primary-t {
        background-color: $color-teal;
        color: $color-dark;
        border: 4px solid $color-teal;
        &:hover{
            background-color: $color-deep-dark;
            border: 4px solid $color-teal;
            color: $color-white;
        }
    }

    .border-error {
        border: 4px solid $color-error;
    }

    .register__action {
        margin: 1rem auto 0 auto;
        font-weight: bold;
        &:hover {
            width: 50%;
            border-radius: 10px;
            background-color: $color-teal;
            color: $color-dark;
            cursor: pointer;
        }
    }

</style>