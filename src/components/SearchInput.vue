<template>
    <div class="inspeccionar__search__wrapper">
        <div class="inspeccionar__search">
            <b-icon v-if="icon" :icon="icon" font-scale="2" class="btn__box"></b-icon>
            <input v-model="search" @keyup="searchAction" class="inspeccionar__search__npt" type="text" :placeholder="placeHolder">
        </div>
        <label v-if="search" for="">{{search}} <span>{{searchText}}</span></label>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        keyword: String,
        placeHolder: String,
        searchText: String,
        searchAction: Function,
    },
    data() {
        return {
            search: this.keyword,
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../styles/GlobalStyles.scss";

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

</style>