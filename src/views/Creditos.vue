<template>
  <div class="container content__wrapper">
    <Nav/>

    <title-wrapper 
        :items="breadcrumb_items"
        title="Buscar Créditos Grupales"
        :button="button"
        :buttonAction="showDetail"
        buttonActionText="Inspeccionar"
        buttonActionIcon="search"
    />

    <creditos-table
        iconDownload="file-arrow-down-fill"
        iconDetail="chevron-right"
        :detailAction="showDetail"
        :table_fields="table_fields"
        :tableData="secrets"
        :checkStatus="checkStatus"
    />
    
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import TitleWrapper from '../components/TitleWrapper.vue'
import CreditosTable from '../components/CreditosTable.vue'

export default {
    name: 'Creditos',
    components: {
      Nav,
      TitleWrapper,
      CreditosTable,
    },
    data() {
        return {
            button: true,
            breadcrumb_items: [
                {
                    text: 'Home',
                    href: '/'
                },
                {
                    text: 'Buscar créditos grupales',
                    href: '/creditos'
                }
            ],
            secrets: [
                {
                    id: this.$uuid.v4(),
                    expedition: '02/08/20',
                    infor_quality: '90%',
                    status: 1,
                    finished: '02/08/21',
                    email: '',
                    first_name: '',
                    last_name: '',
                },
                {
                    id: this.$uuid.v4(),
                    expedition: '12/08/20',
                    infor_quality: '55%',
                    status: 2,
                    finished: '12/08/21',
                    email: '',
                    first_name: '',
                    last_name: '',
                },
                {
                    id: this.$uuid.v4(),
                    expedition: '24/08/20',
                    infor_quality: '87%',
                    status: 1,
                    finished: '24/08/21',
                    email: '',
                    first_name: '',
                    last_name: '',
                },
                {
                    id: this.$uuid.v4(),
                    expedition: '30/08/20',
                    infor_quality: '88%',
                    status: 3,
                    finished: '30/08/21',
                    email: '',
                    first_name: '',
                    last_name: '',
                }
            ],
            table_fields: [
                {
                    key: 'archive',
                    label: 'Archivo',
                    class: 'me-5'
                },
                {
                    key: 'actionsss',
                    label: '',
                    class: ''
                },
                {
                    key: 'actiondsss',
                    label: '',
                    class: ''
                },
                {
                    key: 'actidsosdnsss',
                    label: '',
                    class: ''
                },
                {
                    key: 'expedition',
                    label: 'Expedición',
                    class: 'ms-1'
                },
                {
                    key: 'quality_information',
                    label: '% Calidad de Información',
                    class: 'ms-4'
                },
                {
                    key: 'actidsonsss',
                    label: '',
                    class: ''
                },
                {
                    key: 'status',
                    label: 'Estatus',
                    class: 'ms-3'
                },
                {
                    key: 'actionssss',
                    label: '',
                    class: ''
                },
                {
                    key: 'actddionsss',
                    label: '',
                    class: ''
                },
                {
                    key: 'finished',
                    label: 'Finalización',
                    class: 'ms-3'
                },
                {
                    key: 'actisdsonsss',
                    label: '',
                    class: ''
                },
                {
                    key: 'actioadansss',
                    label: '',
                    class: ''
                },
                {
                    key: 'user',
                    label: 'Usuario',
                    class: 'ms-3'
                },
                {
                    key: 'actions',
                    label: 'Acciones',
                    class: ''
                }
            ],
            table_items: []
        }
    },
    async created() {
      
      let result = await this.$axios.get('https://reqres.in/api/users?page=1');

      let res = result.data.data;

      this.secrets.forEach( (el, index) => {
          el.email = res[index].email;
          el.first_name = res[index].first_name;
          el.last_name = res[index].last_name;
      });
    },
    methods: {
      showDetail() {
        this.$router.replace({ name: 'Inspeccionar'});
      },
      handleicon ( icon ) {
          console.log({ICONO: icon});
      },
      checkStatus( status ) {

          let result = '';

          switch ( status ) {
                case 1:
                    result = `<span class="item__row text-success">Finalizado</span>`;
                    break;
                
                case 2:
                    result = `<span class="item__row text-warning">En proceso</span>`;
                    break;

                case 3:
                    result = `<span class="item__row text-danger">Rechazado</span>`;
                    break;
          }

          return result;
      }
    }
}
</script>

<style lang="scss" scoped>

    .content__wrapper {
        padding-top: 5rem;
    }

</style>