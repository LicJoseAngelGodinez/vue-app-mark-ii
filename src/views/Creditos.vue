<template>
  <div class="container content__wrapper">
    <Nav/>
    <h1>Creditos</h1>
    <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    name: 'Creditos',
    components: {
      Nav
    },
    data() {
        return {
            breadcrumb_items: [
                {
                    text: 'Home',
                    href: '/Secret'
                },
                {
                    text: 'Buscar créditos grupales',
                    href: '/creditos'
                }
            ]
        }
    }
}
</script>

<style lang="scss">

    .content__wrapper {
        padding-top: 5rem;
    }

</style>