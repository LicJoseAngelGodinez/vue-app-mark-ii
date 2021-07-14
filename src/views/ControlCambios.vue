<template>
  <div class="container content__wrapper">
    <Nav/>

    <div class="cdc__title__wrapper">
        <div>
            <b-breadcrumb 
            :items="breadcrumb_items"></b-breadcrumb>
        </div>

        <div class="cdc__title">
            <b-icon-arrow-left 
            font-scale="3" 
            class="btn__t__back" @click="backAction"></b-icon-arrow-left>
            <span 
            class="section__title">
                <b-icon-search></b-icon-search>&nbsp;Control de cambios
            </span>
        </div>

    </div>

    <b-row class="m-auto mt-4">

      <div>

          <div class="table__header">
            <div class="" v-for="field in table_fields" :key="field.key">
                <span >{{field.label}}</span>          
            </div>              
          </div>

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
                <div>{{secret.status}}</div>
            </div>
            <div class="col">
                <span class="item__row">{{secret.finished}}</span>
            </div>
            <div class="col">
                <span class="item__row">{{secret.user}}</span>
            </div>
            <div class="ms-auto item__icon">
                <b-icon-file-arrow-down-fill></b-icon-file-arrow-down-fill>
            </div>
            <div class="ms-auto item__icon">
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
    name: 'ControlCambios',
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

<style lang="scss">

    @import "../styles/GlobalStyles.scss";

    .content__wrapper {
        padding-top: 5rem;
    }

    .cdc__title__wrapper {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
        border-bottom: 1px solid $color-dark;
    }

    .cdc__title {
        display: flex;
        justify-content: left;
        gap: 1rem;
        align-items: center;
    }

    .section__title svg {
        color: $color-teal;
    }

    .btn__t__back {
        border-radius: 50%;
        padding: .5rem;
        font-weight: bold;
        color: $color-teal;
        background-color: $color-white;
        &:hover {
            background-color: $color-light-dark;
            cursor: pointer;
        }
    }

</style>