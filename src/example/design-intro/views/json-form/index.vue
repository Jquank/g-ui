<template>
    <div class="json-form">
        <div v-for="(item, index) in formData" :key="index" class="form-item-box">
            <div v-if="item.type==='input'" class="form-item">
                <span class="item-label">{{item.label}}</span>
                <el-input
                    :type="item.subType"
                    v-model="item.value"
                    :maxlength="item.maxLength"
                    :autosize="item.subType==='textarea'?{minRows: 2, maxRows: 6 }:false"
                ></el-input>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: [
                {
                    type: 'input',
                    subType: 'text',
                    value: null,
                    label: '土地价格',
                    maxLength: 15,
                },
                {
                    type: 'input',
                    subType: 'textarea',
                    value: null,
                    label: '操盘情况',
                    maxLength: 15,
                },
                {
                    type: 'select',
                    value: null,
                    label: '所属公司',
                    options: [
                        { label: '上海公司', value: 1 },
                        { label: '北京公司', value: 2 },
                    ],
                },
                {
                    type: 'date',
                    subType: 'date',
                    value: null,
                    label: '土地获取时间',
                },
                {
                    type: 'date',
                    subType: 'dates',
                    value: null,
                    label: '首次开盘时间',
                },
            ],
        }
    },
    props: {},
    methods: {},
}
</script>
<style lang='less' scoped>
.json-form {
    display: flex;
    align-items: center;
    width: 800px;
    .form-item-box {
        width: 50%;
        .form-item {
            display: flex;
            align-items: center;
            padding: 10px 15px;
            .item-label {
                font-size: 13px;
                width: 100px;
            }
        }
    }
}
</style>
