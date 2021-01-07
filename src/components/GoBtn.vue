<template>
    <a :href="goto" class="go-btn">{{ value }}</a>
</template>

<script>
export default {
    props: {
        value: String,
        goto: String
    }
}
</script>

<style>
    .go-btn {
        margin: 10px;
        padding: 10px 20px;
        height: 40px;
        background: red;
    }
</style>