<template>
    <div id="app">
        <div class="container">
            <div class="nav">
                <my-nav></my-nav>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MyNav from 'ex/views/nav.vue'
export default {
    name: 'app',
    components: {
        // eslint-disable-next-line vue/no-unused-components
        MyNav
    }
}
</script>

<style lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .container {
        display: flex;
        .nav {
            flex: 0 0 180px;
        }
        .content {
            flex: 1;
        }
    }
}
</style>
