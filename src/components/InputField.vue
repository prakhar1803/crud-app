<template>
  <input class="input-field" 
        :type="datatype" 
        :placeholder="holder"
        v-model="val"
        @keyup ="emitToParent"
  >
</template>

<script>
export default {
    props: {
        datatype: {
            type: String,
            default: "text"
        },
        holder: {
            type: String
        }
    },
    data() {
        return {
            val: ''
        }
    },
    methods: {
        emitToParent(event) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                // your code
                this.$emit('changeVal',[this.holder, this.val])
            }, 500);
        }
    }
}
</script>

<style>
    .input-field {
        margin: 0;
        padding: 5px;
        height: 20px;
        min-width: 80px;
        border-radius: 5px;
    }
    .input-field:focus {
        border: 2px solid blue;
    }
</style>