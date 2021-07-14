<template>
  <div class="container content__wrapper">
    <Nav/>
    <div class="inspeccionar__title__wrapper">
        <div>
            <b-breadcrumb :items="breadcrumb_items"></b-breadcrumb>
        </div>

        <div class="inspeccionar__title">
            <b-icon-arrow-left font-scale="3" class="btn__t__back"></b-icon-arrow-left>
            <span class="section__title"><b-icon-search></b-icon-search>&nbsp;Inspeccionar</span>
        </div>

    </div>

    <div class="inspeccionar__search__wrapper">
        <div class="inspeccionar__search">
            <b-icon-search font-scale="2" class="btn__box"></b-icon-search>
            <input class="inspeccionar__search__npt" type="text" placeholder="No Cliente, crédito, ID...">
        </div>
        <label for="">Miguel Me <span>(2 resultados)</span></label>
    </div>

    <div class="inspeccionar__results__wrapper">
        <div class="inspeccionar__header">
            <div class="col d-flex ms-5">Cliente</div>
            <div class="col d-flex ms-4">RFC</div>
            <div class="col d-flex ms-4"></div>
        </div>

        <div class="inspeccionar__contents">
            <div class="inspeccionar__row">

                <img src="../assets/img/icon.png" alt="" srcset="">

                <label for="" class="row__name">Miguel Mencía Guijón</label>
                <label for="">MMG100286JSLDRC</label>

                <div class="row__svg">
                    <b-icon-chevron-right @click="showChangeControl"></b-icon-chevron-right>
                </div>

            </div>
        </div>
    </div>

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
    name: 'Inspeccionar',
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
                }
            ]
        }
    },
    methods: {
        showChangeControl() {
            this.$router.replace({ name: 'ControlCambios'});
        }
    }
}
</script>

<style lang="scss">

    @import "../styles/GlobalStyles.scss";

    .content__wrapper {
        padding-top: 5rem;
    }

    .inspeccionar__title__wrapper {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
        border-bottom: 1px solid $color-dark;
    }

    .inspeccionar__search__wrapper {
        width: 80%;
        margin: 0 auto;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        .inspeccionar__search{
            width: 100%;
            display: flex;
            justify-content: left;
            gap: 1.5rem;
            align-items: center;
            margin: 0 auto;
            background-color: $color-deep-dark;
            padding: .5rem;
            border: 4px solid $color-breadcrumb-selected;
            border-radius: 10px;
            input {
                width: 100%;
                background-color: $color-deep-dark;
                font-size: 1.2rem;
                border: none;
                color: $color-breadcrumb-selected;
                &:focus{
                    outline: none;
                }
            }
            svg {
                padding: .5rem;
            }
        }
        label {
            margin-right: 100%;
            display: flex;
            width: max-content;
            gap: .5rem;
            padding: 1rem 0;
        }
    }

    .inspeccionar__header {
        width: 80%;
        margin: 0 auto;
        display: flex;
        padding: 1rem 0;
    }

    .inspeccionar__title {
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
    }

    .inspeccionar__row {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        background-color: $color-light-dark;
        color: $color-gray-title;
        border-radius: 10px;
        padding: .7rem;
        justify-content: space-around;
        img {
            background-color: $color-white;
            border-radius: 50%;
            margin: 0 .2rem;
            max-height: 3rem;
        }
    }
    .row__svg {
        align-self: center;
        width: 40%;
        text-align: end;
        svg {
            cursor: pointer;
            &:hover {
                color: $color-teal;
            }
        }
    }

    .row__name {
        margin-left: -1.5rem;
    }

</style>