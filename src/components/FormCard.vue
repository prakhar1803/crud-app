<template>
  <div class="form-card flex f-column">
    <input-field
        v-for="(field, index) in fields" :key="index"
        :holder="field"
        :style="{ 'width' : width }"
        @changeVal="updateVal($event)"
    ></input-field>
    <go-btn :value="btntext" :met="gobtnClicked"></go-btn>
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
        btntext: String,
        width: String,
        querytype: String
    },
    data() {
        return {
            forminfo: {},
            sqlquery: ''
        }
    },
    computed: {
        getData() {
            let data = [];
            return data
        }
    },
    methods: {
        gobtnClicked() {
            console.log(this.forminfo)
            if (this.querytype == 'insert') {
                this.sqlquery = `INSERT INTO employee VALUES (
                    ${this.forminfo[this.fields[0]]},
                    ${this.forminfo[this.fields[1]]},
                    ${this.forminfo[this.fields[2]]},
                );`
                console.log(this.sqlquery)
            }
            
        },
        updateVal(eventData) {
            this.forminfo[eventData[0]] = eventData[1]
        }
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
    .input-field {
        margin: 10px;
    }
</style>