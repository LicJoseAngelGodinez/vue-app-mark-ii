<template>
  <div class="inspeccionar__results__wrapper">
        <div class="inspeccionar__header">
            <div class="col d-flex ms-5">Cliente</div>
            <div class="col d-flex ms-4">RFC</div>
            <div class="col d-flex ms-4"></div>
        </div>

        <div class="inspeccionar__contents">
            <div class="inspeccionar__row" v-for="client in tableData" :key="client.id">

                <img :src="client.avatar" alt="" srcset="">

                <label for="" class="row__name">{{`${client.first_name} ${client.last_name}`}}</label>
                <label for="">{{client.email}}</label>

                <div class="row__svg">
                    <b-icon :icon="icon" @click="clickAction"></b-icon>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tableData: Array,
        icon: String,
        clickAction: Function,
    }
    
}
</script>

<style lang="scss" scoped>

@import "../styles/GlobalStyles.scss";

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

    .inspeccionar__row {
        width: 80%;
        margin: 1rem auto;
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