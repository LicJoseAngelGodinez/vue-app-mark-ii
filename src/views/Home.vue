<template>
  <div class="container home__wrapper">
    <Nav />

    <title-wrapper 
        :items="breadcrumb_items"
        title="Buscar Créditos Grupales"
        icon="card-list"
        :button="button"
        :buttonAction="showDetail"
        buttonActionText="Agregar nuevo"
        buttonActionIcon="plus"
    />
    
    <home-table
        :tableData="secrets"
        detailActionIcon="chevron-right"
        :detailAction="showDetail"
    />

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import TitleWrapper from '../components/TitleWrapper.vue'
import HomeTable from '../components/HomeTable.vue'

export default {
    name: 'Home',
    components: {
      Nav,
      TitleWrapper,
      HomeTable,
    },
    data() {
      return {
        button: true,
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
            href: '/'
          }
        ]
      }
    },    
    methods: {
      showDetail() {
        this.$router.replace({ name: 'Creditos'});
      }
    }
}
</script>

<style lang="scss" scoped>

  .home__wrapper {
    padding-top: 5rem;
  }

</style>