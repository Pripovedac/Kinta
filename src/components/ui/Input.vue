<template>
  <div>
      <label><input type="text" :placeholder="placeholder"/></label>
  </div>
</template>

<script>
export default {
    props: ['placeholder']
}
</script>

<style scoped>
    input {
        /*width: 80%;*/
        padding-left: 2%;
        margin-top: 2%;
        margin-bottom: 2%;
        /*border: 1px solid green;*/
        width: 368px;
        height: 48px;
        opacity: 0.48;
        border-radius: 2px;
        background-color: #ffffff;
        border: solid 1px #26bead;
    }

    input:hover{
        width: 368px;
        height: 48px;
        border-radius: 2px;
        background-color: #ffffff;
        border: solid 1px #26bead;
        curosor: pointer;
    }

</style>
