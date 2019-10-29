<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%"
        >
            <el-table-column
                prop="date"
                label="日期"
                width="180"
            ></el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180"
            ></el-table-column>
            <el-table-column
                prop="address"
                label="地址"
            ></el-table-column>
        </el-table>
    </div>
</template>

<script>
import Sortable from 'sortablejs'
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 001 弄'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 002 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 003 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 004 弄'
                }
            ]
        }
    },
    mounted() {
        const _this = this
        let tbody = document.querySelectorAll('.el-table__body tbody')[0]
        // eslint-disable-next-line no-unused-vars
        var sortable = new Sortable(tbody, {
            ghostClass: 'my-ghost-class',
            onEnd: function(evt) {
                let tr1 = _this.tableData[evt.oldIndex]
                let tr2 = _this.tableData[evt.newIndex]
                _this.tableData[evt.oldIndex] = tr2
                _this.tableData[evt.newIndex] = tr1
            }
        })
    },
    methods: {}
}
</script>
<style lang='less'>
.my-ghost-class {
    opacity: 0.4;
    background-color: rgba(135, 140, 221, 0.5) !important;
}
</style>
