<template>
    <button class="primary-button">
        <slot></slot>
    </button>
</template>

<script>
    export default {}
</script>

<style scoped>
    .primary-button {
        background-color: #eee;
        width: 80%;
        padding-bottom: 3%;
        padding-top: 3%;
        border: none;
        border-radius: 2%;
        background: linear-gradient(to left, rgb(86, 245, 94), rgb(36, 178, 97));
        color: white;
        font-size: 1em;
        /*border: 1px solid red;*/
    }
</style>
