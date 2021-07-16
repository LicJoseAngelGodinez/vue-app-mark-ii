<template>
  <div class="container content__wrapper">
    <Nav />

    <title-wrapper 
        :items="breadcrumb_items"
        title="Inspeccionar"
        icon="search"
        :backButton="backButtonEnabled"
        :backButtonAction="backAction"
    />

    <search-input
        icon="search"
        placeHolder="No Cliente, crédito, ID..."
        :searchText="searchText"
        :searchAction="searchName"
        :keyword="keyword"
    />

    <inspeccionar-table
        :tableData="filterClients"
        icon="chevron-right"
        :clickAction="showChangeControl"
    />

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import TitleWrapper from '../components/TitleWrapper.vue'
import SearchInput from '../components/SearchInput.vue'
import InspeccionarTable from '../components/InspeccionarTable.vue'
export default {
    name: 'Inspeccionar',
    components: {
        Nav,
        TitleWrapper,
        SearchInput,
        InspeccionarTable,
    },
    data() {
        return {
            backButtonEnabled: true,
            keyword: "",
            searchText: "",
            clients: [],
            filterClients: [],
            breadcrumb_items: [
                {
                    text: 'Home',
                    href: '/'
                },
                {
                    text: 'Buscar créditos grupales',
                    href: '/creditos'
                },
                {
                    text: 'Inspeccionar',
                    href: '/creditos/inspeccionar'
                }
            ]
        }
    },
    async created() {
          
      let result = await this.$axios.get('https://reqres.in/api/users?page=1');

      let res = result.data.data;

      this.filterClients = res;
      this.clients = res;
    },
    methods: {
        showChangeControl() {
            this.$router.replace({ name: 'ControlCambios'});
        },
        backAction() {
            this.$router.replace({ name: 'Creditos'});
        },
        searchName( e ) {

            let filterClientsLength = 0,
                auxText = "";

            if ( e.target.value != "" && e.target.value.length >= 3 ) {

                this.keyword = e.target.value;

                let result = {};

                result = this.clients.find(element => {
                    return element.first_name.toLocaleUpperCase().includes(this.keyword.toLocaleUpperCase());
                });

                if ( result ) {
                    this.filterClients = [result];
                } else {
                    this.filterClients = this.clients;
                }

            } else {
                 this.filterClients = this.clients;
            }

            filterClientsLength = this.filterClients.length;

            auxText = filterClientsLength === 1 ? 'resultado' : "resultados";

            this.searchText = `${filterClientsLength} ${auxText}`

        },
    }
}
</script>

<style lang="scss" scoped>

    .content__wrapper {
        padding-top: 5rem;
    }

</style>