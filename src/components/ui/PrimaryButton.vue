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
        /*background-color: #eee;*/
        width: 80%;
        padding-bottom: 3%;
        padding-top: 3%;
        border: none;
        border-radius: 2%;
        /*background: linear-gradient(to left, rgb(86, 245, 94), rgb(36, 178, 97));*/
        color: white;
        font-size: 1em;
        /*border: 1px solid red;*/
        width: 368px;
        height: 50px;
        border-radius: 4px;
        background-image: linear-gradient(262deg, #27c1ae, #0d4f8a 73%, #2c4ad6);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }


</style>
