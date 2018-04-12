<template>
    <div>
        <Paper>
            <h3>kinta</h3>
            <h4>Welcome back</h4>
            <p>Did you lose some weight?</p>
            <Input :placeholder="Email"/>
            <Input :placeholder="Password"/>
            <div id="inlineHolder">
                <label> <input type="checkbox" checked/> Keep me logged in</label>
                <p> Forgot password? </p>
            </div>
            <PrimaryButton> LOG IN</PrimaryButton>
        </Paper>
    </div>
</template>

<script>
    import Input from '../ui/Input.vue'
    import PrimaryButton from '../ui/PrimaryButton.vue'
    import Paper from '../ui/Paper.vue'

    export default {
        data() {
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

