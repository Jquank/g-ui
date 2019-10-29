<template>
    <div>
        <g-input
            v-model="a"
            decimal="2"
            thousand
            style="width: 300px;"
        ></g-input>
    </div>
</template>

<script>
import GInput from 'components/input/src/input.vue'
export default {
    data() {
        return {
            a: '12345678'
        }
    },
    components: {
        GInput
    }
}
</script>
<style lang='less' scoped>
</style>
