<template>
    <b-row class="m-auto mt-4">

      <div>

          <div class="table__header">
            <div class="" v-for="field in table_fields" :key="field.key">
                <span >{{field.label}}</span>          
            </div>              
          </div>

          <div class="col-12 mb-3 d-flex justify-content-start align-items-center item__wrapper flex-nowrap" v-for="secret in tableData" :key="secret.id">
            <div class="col">
                <span class="item__file">{{`${secret.first_name} ${secret.last_name}`}}</span>
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
                <span class="item__row">{{secret.email}}</span>
            </div>
            <div class="ms-auto item__icon">
                <b-icon :icon="iconDownload"></b-icon>
            </div>
            <div class="ms-auto item__icon" @click="detailAction">
                <b-icon :icon="iconDetail"></b-icon>
            </div>
        </div>
      </div>

    </b-row>
</template>

<script>
export default {
    props: {
        tableData: Array,
        table_fields: Array,
        iconDownload: String,
        iconDetail: String,
        detailAction: Function,
        checkStatus: Function,

    }
}
</script>

<style lang="scss" scoped>

    @import "../styles/GlobalStyles.scss";



    .item__file {
        font-weight: bold;
        font-size: 1.1rem;
        padding: 1rem;
        color: $color-gray-title;
        text-decoration: underline;
    }

    .item__row {
        color: $color-gray-title;
        font-weight: bold;
    }

    .table__header {
        color: $color-gray-title;
        display: flex;
        justify-content: space-evenly;
    }

    svg:hover {
        color: $color-teal;
        cursor: pointer;
    }

</style>