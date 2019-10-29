<template>
    <div id="app">
        <div class="header">
            <my-header></my-header>
        </div>
        <div class="container">
            <div class="nav">
                <my-nav class="my-nav"></my-nav>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MyNav from 'ex/views/nav.vue'
import MyHeader from 'ex/views/my-header.vue'
export default {
    name: 'app',
    data() {
        return {}
    },
    components: {
        MyNav,
        MyHeader
    }
}
</script>

<style lang="less">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 1140px;
    height: 100%;
    margin: 0 auto;
    .container {
        display: flex;
        height: 100%;
        .nav {
            flex: 0 0 180px;
            .my-nav {
                height: 100%;
                .el-menu {
                    height: 100%;
                }
            }
        }
        .content {
            flex: 1;
            padding: 15px;
        }
    }
}
</style>
