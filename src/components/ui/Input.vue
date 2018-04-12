<template>
    <div>
        <label><input class="inputField"
                      type="text"
                      v-model="txtValue"
                      :placeholder="placeholder"
                      @change="importValue"/></label>
    </div>
</template>

<script>
    export default {
        props: ['placeholder'],
        data() {
            return {
                txtValue: ""
            }
        },
        methods: {
            importValue(event) {
                console.log('txtValue', this.txtValue)
                this.$emit('txtValue', this.txtValue)
            }
        }
    }
</script>

<style scoped>
    .inputField {
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

    /* Not working, yet to see. */
    .inputField:hover {
        /*border: solid 1px #26bead;*/
        curosor: pointer;
    }

</style>
