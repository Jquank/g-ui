<template>
    <div style="text-align: center;margin-top: 20px;">
        <g-button
            type="primary"
            size="large"
            icon="search"
        ></g-button>
        <g-button type="success">
            点我
            <i class="iconfont g-icon-cloud-upload"></i>
        </g-button>
        <g-button
            loading
            type="danger"
            size="small"
        >点我</g-button>
        <g-button
            type="info"
            size="large"
            disabled
        >点我</g-button>
    </div>
</template>

<script>
import GButton from 'components/button/src/button'
export default {
    name: 'app',
    components: {
        GButton
    },
    created() {}
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
