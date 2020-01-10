<template>
    <div>
        <pre>

        </pre>
    </div>
</template>

<script>
import deepCopy from './index.js'
export default {
    data() {
        return {}
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
    methods: {}
}
</script>
<style lang="less" scoped></style>
