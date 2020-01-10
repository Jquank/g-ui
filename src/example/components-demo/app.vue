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
import MyNav from './nav.vue'
import MyHeader from 'ex/common/my-header.vue'
export default {
    name: 'demo',
    data() {
        return {}
    },
    components: {
        MyNav,
        MyHeader
    }
}
</script>

<style lang="less"></style>
