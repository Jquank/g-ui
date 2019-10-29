<template>
    <div class="my-header">
        <div class="log">123</div>
        <div class="item-wrapper">
            <div
                class="item"
                v-for="item in itemList"
                :key="item"
                @click="clickItem"
            >{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemList: ['指南', '组件']
        }
    },
    methods: {
        clickItem() {}
    }
}
</script>
<style lang='less' scoped>
.my-header {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    height: 80px;
    line-height: 80px;
    .item-wrapper {
        display: flex;
        .item {
            padding: 0 22px;
            cursor: pointer;
        }
    }
}
</style>
