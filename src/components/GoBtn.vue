<template>
    <a :href="goto" class="go-btn"
       :class="{ 'bg-change-red' : getred, 'bg-change-green' : getgreen, 'bg-change-blue' : getblue }"
       @click="met"
    >{{ value }}</a>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: "Submit"
        },
        goto: String,
        color: {
            type: String,
            default: "blue"
        },
        met: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        getred() {
            if(this.color == "red")
                return true
            return false
        },
        getgreen() {
            if(this.color == "green")
                return true
            return false
        },
        getblue() {
            if(this.color == "blue")
                return true
            return false
        }
    }
}
</script>

<style>
    .go-btn {
        margin: 10px;
        padding: 5px 20px;
        max-height: 40px;
        min-width: 60px;
        font-size: 1em;
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 5px;
        position: relative;
        box-shadow: 2px 2px 2px 0px rgba(46, 46, 46, 0.7);
        top: -2px;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    .go-btn:hover {
        cursor: pointer;
    }
    .go-btn:active{
        top: 0;
        box-shadow: none;
    }
    .bg-change-green {
        background: rgb(22, 179, 48);
    }
    .bg-change-red {
        background: rgb(211, 34, 34);
    }
    .bg-change-blue {
        background: rgb(56, 107, 247);
    }
</style>