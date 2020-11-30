<template>
    <div>
        <!-- <g-checkbox v-model="isChecked" disabled label="选项1"></g-checkbox> -->
        <g-checkbox-group v-model="checkList">
            <g-checkbox label="0">选项2</g-checkbox>
            <g-checkbox label="1">选项33</g-checkbox>
        </g-checkbox-group>
    </div>
</template>

<script>
import GCheckbox from '@/components/checkbox/src/checkbox'
import GCheckboxGroup from '@/components/checkbox/src/checkbox-group'
export default {
    data() {
        return {
            checkList: ['0'],
            isChecked: true
        }
    },
    components: {
        GCheckbox,
        GCheckboxGroup
    },
    methods: {}
}
</script>
<style lang="less" scoped></style>
