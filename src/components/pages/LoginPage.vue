<template>
  <div>
      <span> login </span>
      <Paper>
        <Input :placeholder="Email"/>
        <Input :placeholder="Password"/>
        <PrimaryButton> Login </PrimaryButton>
      </Paper>
  </div>
</template>

<script>
import Input from '../ui/Input.vue'
import PrimaryButton from '../ui/PrimaryButton.vue'
import Paper from '../ui/Paper.vue'

export default {
    data(){
        return {
            Email: "Email", // user@example.com
            Password: "Password" // Must containt at least 6 characters
        }
    },
  components: {
    Input,
    PrimaryButton,
    Paper
  }
}
</script>

<style scoped>

</style>

