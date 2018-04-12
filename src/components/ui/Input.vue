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
        width: 80%;
        padding: 2%;
        margin-top: 2%;
        margin-bottom: 2%;
        border: 1px solid green;

    }
</style>
