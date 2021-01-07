<template>
  <div class="form-card flex f-column">
    <input-field
        v-for="(field, index) in fields" :key="index"
        :holder="field"
        v-model="forminfo[index]"
    ></input-field>
    <go-btn :value="btntext"></go-btn>
  </div>
</template>

<script>
import GoBtn from './GoBtn'
import InputField from './InputField'

export default {
    components: {
        GoBtn,
        InputField
    },
    props: {
        fields: {
            type: Array,
            dafault: ['Enter text']
        },
        btntext: String
    },
    data() {
        return {
            forminfo: ['', '', '', '']
        }
    },
    computed: {
        
    }
    
}
</script>

<style>
    .form-card {
        margin: 0;
        min-width: 100px;
        max-width: 300px;
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>