<template>
    <div>
        <g-button type="primary" size="small">点我</g-button>
        <g-button type="warning">点我</g-button>
        <g-button type="danger" size="large">点我</g-button>
    </div>
</template>

<script>
// import eventBus from 'ex/design-intro/main.js'
export default {
    data() {
        return {}
    },
    mounted() {
        console.log(this.$root)
        this.$root.$on('aaa', () => {
            console.log(123456)
        })
    },
    methods: {}
}
</script>
<style lang="less" scoped></style>
