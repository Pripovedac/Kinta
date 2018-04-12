<template>
  <div>
      <span> register </span>
      <Input />
      <PrimaryButton />
      <Paper />
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
