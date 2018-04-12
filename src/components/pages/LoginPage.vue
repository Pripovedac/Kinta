<template>
    <div>
        <Paper>
            <h3 id="kinta">kinta</h3>
            <h4 class="Welcome-back">Welcome back</h4>
            <p id="funnyQuestion">Did you lose some weight?</p>
            <Input :placeholder="Email"/>
            <Input :placeholder="Password"/>
            <div id="inlineHolder">
                <label> <input type="checkbox" checked class="chkBox"/> Keep me logged in</label>
                <p class="link"> Forgot Password? </p>
            </div>
            <PrimaryButton> LOG IN</PrimaryButton>
            <p>Don't have an account? <span class="link">Sign up</span></p>
        </Paper>
        <p class="SecurityRealibility">Security and Reliability</p>
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
        color:transparent;
        -webkit-background-clip: text;
        font-size: 2.2em;
        width: 110.3px;
        height: 32px;
        background-image: linear-gradient(253deg, #27c1ae, #0d4f8a 73%, #2c4ad6);
        margin: 0 auto;
        padding-top: 25%;
        padding-bottom: 10%;
    }
    .Welcome-back {
        width: 163px;
        height: 29px;
        font-family: MaisonNeue;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #345678;
        margin: 0 auto;
    }
    #funnyQuestion {
        /*color: gray;*/
        width: 198px;
        height: 19px;
        opacity: 0.64;
        font-family: MaisonNeue;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #808080;
        margin: 0 auto;
        padding-bottom: 5%;
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

    /*.chkBox{*/
        /*width: 8px;*/
        /*height: 9.5px;*/
        /*background-color: #12a26f;*/
    /*}*/
    .link{
        color: green;
        text-decoration: underline;
        width: 135px;
        height: 19px;
        font-family: MaisonNeue;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #26bead;
    }
    .SecurityRealibility {
        width: 127px;
        height: 14px;
        opacity: 0.5;
        font-family: MaisonNeue;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin: 0 auto;
    }
</style>

