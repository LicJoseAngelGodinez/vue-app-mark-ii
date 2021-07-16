<template>
    <b-row class="m-auto mt-4">

      <div>

          <div class="table__header">
            <div class="table_items" v-for="field in table_fields" :key="field.key">
                <span>{{field.label}}</span>        
            </div>              
          </div>

          <div class="item__wrapper" v-for="secret in tableData" :key="secret.id">
                <span class="item__number">{{secret.index}}</span>
                <span class="item__row">{{secret.expedition}}</span>
                <span class="item__row">{{secret.file}}</span>
                <span class="item__row">{{secret.lorem}}</span>
        </div>
      </div>

    </b-row>
</template>

<script>
export default {
    props: {
        table_fields: Array,
        tableData: Array
    }

}
</script>

<style lang="scss" scoped>

    @import "../styles/GlobalStyles.scss";

    .table__header {
        display: flex;
        justify-content: left;
        gap: 16.5rem;
    }

    .item__wrapper {
        display: flex;
        justify-content: left;
        gap: 12rem;
        padding: .5rem 1rem;
        margin: .5rem 0;
        align-items: center;
    }

    .item__row {
        color: $color-gray-title;
        font-weight: bold;
    }

    .item__number {
        border-radius: 5px;
        padding: .5rem .8rem;
        background-color: $color-light-dark;
        font-weight: bold;
        border: 3px solid $color-teal;
    }

</style>