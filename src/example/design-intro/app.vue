<template>
    <div id="app">
        <div class="header">
            <my-header @change="aaa"></my-header>
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
    name: 'design',
    data() {
        return {}
    },
    components: {
        MyHeader,
        MyNav
    },
    methods: {
        aaa() {
            console.log(789)
        }
    }
}
</script>

<style lang="less"></style>
