<template>
  <div class="container content__wrapper">
    <Nav/>

    <div class="row mx-auto d-flex justify-content-between border__bottom align-items-center">
      <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>
      <div class="col-12 col-md-4 col-lg-4 d-md-flex d-lg-flex justify-content-start align-items-center">
        <span class="section__title">&nbsp;Buscar Créditos Grupales</span>
      </div>
      <div class="col-12 col-md-4 col-lg-4 d-md-flex d-lg-flex justify-content-end" @click="showDetail">
        <b-button class="btn__t"><b-icon-search></b-icon-search> Inspeccionar</b-button>
      </div>
    </div>


    <b-row class="m-auto mt-4">

      <div>
          <b-table class="border-bottom-0" :items="table_items" :fields="table_fields">
          </b-table>

          <div class="col-12 mb-3 d-flex justify-content-start align-items-center item__wrapper flex-nowrap" v-for="secret in secrets" :key="secret.id">
            <div class="col">
                <span class="item__file">{{secret.file}}</span>
            </div>
            <div class="col">
                <span class="item__row">{{secret.expedition}}</span>
            </div>
            <div class="col">
                <span class="item__row">{{secret.infor_quality}}</span>
            </div>
            <div class="col">
                <div v-html=checkStatus(secret.status)></div>
            </div>
            <div class="col">
                <span class="item__row">{{secret.finished}}</span>
            </div>
            <div class="col">
                <span class="item__row">{{secret.user}}</span>
            </div>
            <div class="float-right ms-auto item__icon" @click="showDetail">
                <b-icon-file-arrow-down-fill></b-icon-file-arrow-down-fill>
            </div>
            <div class="float-right ms-auto item__icon" @click="showDetail">
                <b-icon-chevron-right></b-icon-chevron-right>
            </div>
        </div>
      </div>

    </b-row>

    
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
            ],
            secrets: [
                {
                    id: this.$uuid.v4(),
                    file: 'clientes_credito.xml',
                    expedition: '02/08/20',
                    infor_quality: '90%',
                    status: 1,
                    finished: '02/08/21',
                    user: '@goytia',
                },
                {
                    id: this.$uuid.v4(),
                    file: 'clientes_credito.xml',
                    expedition: '12/08/20',
                    infor_quality: '55%',
                    status: 2,
                    finished: '12/08/21',
                    user: '@goytia',
                },
                {
                    id: this.$uuid.v4(),
                    file: 'clientes_credito.xml',
                    expedition: '24/08/20',
                    infor_quality: '87%',
                    status: 1,
                    finished: '24/08/21',
                    user: '@goytia',
                },
                {
                    id: this.$uuid.v4(),
                    file: 'clientes_credito.xml',
                    expedition: '30/08/20',
                    infor_quality: '88%',
                    status: 3,
                    finished: '30/08/21',
                    user: '@itacacapital',
                }
            ],
            table_fields: [
                {
                    key: 'archive',
                    label: 'Archivo'
                },
                {
                    key: 'expedition',
                    label: 'Expedición'
                },
                {
                    key: 'quality_information',
                    label: '% Calidad de Información'
                },
                {
                    key: 'status',
                    label: 'Estatus'
                },
                {
                    key: 'finished',
                    label: 'Finalización'
                },
                {
                    key: 'user',
                    label: 'Usuario'
                },
                {
                    key: 'actions',
                    label: 'Acciones'
                },
                {
                    label: ''
                }
            ],
            table_items: []
        }
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

<style lang="scss">

    @import "../styles/GlobalStyles.scss";

    .content__wrapper {
        padding-top: 5rem;
    }

    .section__title {
        font-size: 1.2rem;
        font-weight: bold;
    }

    .breadcrumb-item a {
        color: $color-white;
    }

    .item__file {
        font-weight: bold;
        font-size: 1.4rem;
        padding: 1rem;
        color: $color-gray-title;
        text-decoration: underline;
    }

    .item__row {
        color: $color-gray-title;
        font-weight: bold;
    }

</style>