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
        background-color: whitesmoke;
        border: none;
        box-shadow: 2px 2px 0 0 #eee;
        width: 30%;
        margin: 0 auto;
        background: white;
        padding-top: 2%;
        padding-bottom: 5%;
        border-radius: 2%;

    }
</style>
