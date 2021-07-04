<template>
    <div class="container col-6 mx-auto p-4 border-t">
        <h1 class="my-4">Register</h1>
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
            <button type="submit" class="btn btn-primary-t mt-4 w-100">Sign in</button>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth";

export default {
    name: 'Register',
    methods: {
        async handleSubmit() {
            if ( this.email !== '' && this.password !== '' ) {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then( (userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    this.$router.replace({name: 'Secret'});
                }).catch( (error) => {
                    this.error = error.message;
                });
            } else {
                console.log({email: this.email, pass: this.password });
                this.error = 'faltan campos';
            }
        },
        clearError() {
            this.error = '';
        }
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
    label,
    button {
        font-weight: bold !important;
    }

    .border-t{
        border: 5px solid $color-teal;
        border-radius: 8px;
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

</style>