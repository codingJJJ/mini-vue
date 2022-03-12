<template>
    <div>
        <button @click="checkText1">checkText1</button>
        <button @click="checkText2">checkText2</button>
        <hr>
        <div>showText1: {{ showText1 }}</div>
        <div>showText2: {{ showText2 }}</div>
        <hr>
        <div v-if="showText1">Text1</div>
        <div v-show="showText2">Text2</div>
        <hr>
        <div>测试</div>
        <div @mouseover="mouseover" @mouseleave="mouseleave">{{ mouseoverTxet }}</div>
        <div>{{ test }}</div>
        <div>{{ showText1 }} {{ ohter }}1 {{ showText2 }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 'this is a test',
            showText1: true,
            showText2: false,
            mouseoverTxet: "isn't overed"
        }
    },
    methods: {
        checkText1() {
            this.showText1 = !this.showText1;
        },
        checkText2() {
            this.showText2 = !this.showText2
        },
        mouseover() {
            this.mouseoverTxet = 'is overed'
        },
        mouseleave() {
            this.mouseoverTxet = "isn't overed"
        }
    }
}
</script>
