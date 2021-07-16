<template>
    <b-row class="col-lg-8 m-auto mt-4">
      <div class="col-12 mb-3 d-flex justify-content-start align-items-center item__wrapper flex-nowrap" v-for="secret in tableData" :key="secret.id">
        <div class="col-3 d-flex justify-content-start align-items-center">
          <span class="item__number">{{secret.id}}</span>
          <span class="item__title">{{secret.name}}</span>
        </div>
        <div class="col-3">
          <span class="item__type">{{secret.type}}</span>
        </div>
        <div class="float-right ms-auto item__icon" @click="detailAction">
          <b-icon :icon="detailActionIcon"></b-icon>
        </div>
      </div>
    </b-row>
</template>

<script>
export default {
    props: {
        tableData: Array,
        detailAction: Function,
        detailActionIcon: String,
    }
}
</script>

<style lang="scss" scoped>

@import "../styles/GlobalStyles.scss";

.item__number {
    border-radius: 5px;
    padding: .5rem .8rem;
    background-color: $color-light-dark;
    font-weight: bold;
    border: 3px solid $color-teal;
}

.item__title,
.item__type {
    font-weight: bold;
    padding-left: 1rem;
}

.item__title {    
    font-size: 1.2rem;
}

.item__type {
    font-size: .8rem;
    color: $color-gray-title;
}

.item__icon {
    margin-right: 1rem;
    cursor: pointer;
    padding: 5px;
    &:hover {
        background-color: $color-teal;
        color: black;
        border-radius: 5px;
    }
}

</style>