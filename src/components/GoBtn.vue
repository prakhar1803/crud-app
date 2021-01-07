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
        padding: 5px 20px;
        min-height: 40px;
        min-width: 60px;
        font-size: 1em;
        background: rgb(22, 179, 48);
        color: black;
        text-transform: uppercase;
        border: 2px solid green;
        box-shadow: 0px 0px 3px 1px rgb(127, 230, 127);
        transition: .2s;
    }
    .go-btn:hover {
        cursor: pointer;
        box-shadow: 0px 0px 5px 3px rgb(127, 230, 127);
        transition: .2s;
    }
</style>