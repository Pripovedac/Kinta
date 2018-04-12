<template>
  <div>
      <span> login </span>
      <Paper>
        <Input />
        <Input />
        <PrimaryButton> Login </PrimaryButton>
      </Paper>
  </div>
</template>

<script>
import Input from '../ui/Input.vue'
import PrimaryButton from '../ui/PrimaryButton.vue'
import Paper from '../ui/Paper.vue'

export default {
  components: {
    Input,
    PrimaryButton,
    Paper
  }
}
</script>

<style scoped>

</style>

