<template>
    <div>
        <Paper>
            <h3 id="kinta">kinta</h3>
            <h4>Welcome back</h4>
            <p id="funnyQuestion">Did you lose some weight?</p>
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
    #kinta {
        background: linear-gradient(to left bottom, rgb(86, 245, 94), rgb(36, 178, 97));
        color:transparent;
        -webkit-background-clip: text;
        font-size: 2em;
    }

    #funnyQuestion {
        color: gray;
    }

    #inlineHolder {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        margin: 0 auto;
        padding-bottom: 4%;
    }
</style>

