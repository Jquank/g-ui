<template>
    <div>
        <el-menu
            :default-active="$router.currentRoute.fullPath"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#000"
            active-text-color="#409EFF"
            router
        >
            <template v-for="item in navList">
                <el-menu-item
                    v-if="item.path!=='/'"
                    :key="item.path"
                    :index="item.path"
                >
                    <span slot="title">{{item.meta.name}}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: {
        router: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            navList: this.router.options.routes
        }
    },
    methods: {
        handleOpen(key, keyPath) {},
        handleClose(key, keyPath) {}
    }
}
</script>
<style lang='less' scoped>
</style>
