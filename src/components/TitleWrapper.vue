<template>
    <div class="title__wrapper">
        <div>
            <b-breadcrumb :items="items"></b-breadcrumb>
        </div>

        <div class="tw__content">
            <div class="tw__left">
                <b-icon-arrow-left
                    v-if="backButton"
                    font-scale="3"
                    class="btn__t__back"
                    @click="backButtonAction">                
                </b-icon-arrow-left>

                <span class="section__title">
                    <b-icon 
                    v-if="icon"
                    :icon="icon"
                    ></b-icon> {{title}}
                </span>
            </div>

            <div v-if="button" class="tw__right">
                <button
                class="btn"
                @click="buttonAction"
                >
                    <b-icon :icon="buttonActionIcon"></b-icon> {{buttonActionText}}
                </button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        items: Array,
        title: String,
        icon: String,
        backButton: Boolean,
        backButtonAction: Function,
        button: Boolean,
        buttonAction: Function,
        buttonActionText: String,
        buttonActionIcon: String,
    }
}
</script>

<style lang="scss" scoped>

@import "../styles/GlobalStyles.scss";

.title__wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    border-bottom: 1px solid $color-dark;
}

.tw__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.tw__left {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.tw__right {
    background-color: $color-dark;
    border-radius: 5px;
    border: 2px solid $color-teal;
    button {
        color: $color-white;
        &:hover{
        color: $color-deep-dark;
        }
    }
    &:hover{
      background-color: $color-teal;
    }
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