<template>
  <div class="container content__wrapper">
    <Nav/>

    <title-wrapper 
        :items="breadcrumb_items"
        title="Control de cambios"
        icon="search"
        :backButton="backButtonEnabled"
        :backButtonAction="backAction"
    />

    <control-cambios-table
        :tableData="secrets"
        :table_fields="table_fields"
    />

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import TitleWrapper from '../components/TitleWrapper.vue'
import ControlCambiosTable from '../components/ControlCambiosTable.vue'
export default {
    name: 'ControlCambios',
    components: {
      Nav,
      TitleWrapper,
      ControlCambiosTable,
    },
    data() {
        return {
            backButtonEnabled: true,
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
                },
                {
                    text: 'Control de cambios',
                    href: '/creditos/inspeccionar/control-de-cambios'
                }
            ],
            secrets: [
                {
                    id: this.$uuid.v4(),
                    index: "01",
                    file: 'clientes_credito.xml',
                    expedition: '02/08/20',
                    lorem: 'Lorem ipsum dolor sit amet consectetur',
                    infor_quality: '90%',
                    status: 1,
                    finished: '02/08/21',
                    user: '@goytia',
                },
                {
                    id: this.$uuid.v4(),
                    index: "02",
                    file: 'clientes_credito.xml',
                    expedition: '12/08/20',
                    lorem: 'Lorem ipsum dolor sit amet consectetur',
                    infor_quality: '55%',
                    status: 2,
                    finished: '12/08/21',
                    user: '@goytia',
                },
                {
                    id: this.$uuid.v4(),
                    index: "03",
                    file: 'clientes_credito.xml',
                    expedition: '24/08/20',
                    lorem: 'Lorem ipsum dolor sit amet consectetur',
                    infor_quality: '87%',
                    status: 1,
                    finished: '24/08/21',
                    user: '@goytia',
                },
                {
                    id: this.$uuid.v4(),
                    index: "04",
                    file: 'clientes_credito.xml',
                    expedition: '30/08/20',
                    lorem: 'Lorem ipsum dolor sit amet consectetur',
                    infor_quality: '88%',
                    status: 3,
                    finished: '30/08/21',
                    user: '@itacacapital',
                }
            ],
            table_fields: [
                {
                    key: 'empty',
                    label: '',
                    class: ''
                },
                {
                    key: 'date',
                    label: 'Fecha',
                    class: 'm-auto'
                },
                {
                    key: 'archive',
                    label: 'Archivo',
                    class: ''
                },
                {
                    key: 'changes',
                    label: 'Cambio',
                    class: ''
                },
            ]
        }
    },
    methods: {
        backAction() {
            this.$router.replace({ name: 'Inspeccionar'});
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "../styles/GlobalStyles.scss";

    .content__wrapper {
        padding-top: 5rem;
    }    

</style>