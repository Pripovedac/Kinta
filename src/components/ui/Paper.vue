<template>
  <div class="paper">
      <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .paper {
        /*background-color: whitesmoke;*/
        /*border: none;*/
        /*box-shadow: 2px 2px 0 0 #eee;*/
        /*width: 30%;*/
        margin: 0 auto;
        /*background: white;*/
        /*padding-top: 2%;*/
        /*padding-bottom: 5%;*/
        /*border-radius: 2%;*/
        width: 480px;
        height: 640px;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);

    }
</style>
