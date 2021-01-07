<template>
  <input class="input-field" 
        :type="datatype" 
        :placeholder="holder"
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