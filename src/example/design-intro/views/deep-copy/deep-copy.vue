<template>
    <div>
        <el-select v-model="aaa" value-key="id" @change="singleSel">
            <el-option v-for="item in list" :label="item.label" :value="[item]" :key="item.id"></el-option>
        </el-select>
        <div style="margin-top: 200px;">{{aaa}}</div>
        <div style="margin-top: 200px;">{{bbb}}</div>
    </div>
</template>

<script>
import deepCopy from './index.js'
export default {
    data() {
        return {
            list: [
                { label: '111', id: 1 },
                { label: '222', id: 2 },
                { label: '333', id: 3 },
                { label: '444', id: 4 },
            ],
            aaa: [{ label: '111', id: 1 }],
            bbb: [],
        }
    },
    mounted() {
        let obj = () => {
            console.log('456')
        }
        let c = deepCopy(obj)
        obj = 123
        console.log(obj)
        console.log(c)
    },
    methods: {
        singleSel(val) {
            console.log(val)
            this.bbb = []
            this.bbb.push(val)
        },
    },
}
</script>
<style lang="less" scoped></style>
