<template>
    <div class="my-header">
        <div class="log">123</div>
        <div class="item-wrapper">
            <div class="item" v-for="item in itemList" :key="item.name" @click="clickItem(item.page)">{{ item.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemList: [
                { name: '笔记', page: 'design.html' },
                { name: '组件', page: 'demo.html' }
            ]
        }
    },
    methods: {
        clickItem(page) {
            let href = window.location.href
            if (href.indexOf(page) > -1) {
                return
            }
            window.location.href = '/' + page
        }
    },
    mounted() {
        console.log(this.$attrs)
    }
}
</script>
<style lang="less" scoped>
.my-header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    height: 80px;
    line-height: 80px;
    box-sizing: border-box;
    .item-wrapper {
        display: flex;
        .item {
            padding: 0 22px;
            cursor: pointer;
        }
    }
}
</style>
