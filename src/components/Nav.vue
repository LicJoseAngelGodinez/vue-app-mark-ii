<template>
    <div class="container">
        <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark" class="px-3">
            <b-navbar-brand class="nav__title" href="#">Integra <span class="text__t">Software</span></b-navbar-brand>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ms-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>Miguel Mencía</em>
                            <em class="initials__circle">MM</em>
                        </template>
                        <b-dropdown-item >Profile</b-dropdown-item>
                        <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
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
    methods: {
        async signOut() {
            firebase.auth().signOut()
            .then( () => {
                this.$router.replace({ name: 'Login' });
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "../styles/GlobalStyles.scss";

    em {
        font-style: normal;
        color: $color-white;
        font-weight: bold;
    }

    .nav__title {
        font-weight: bold;
    }

    .text__t {
        color: $color-teal;
    }

    .initials__circle {
        background-color: white;
        color: black;
        padding: 10px 6px;
        margin-left: 10px;
        border-radius: 50%;
    }

</style>