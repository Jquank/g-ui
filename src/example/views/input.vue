<template>
    <div>
        <g-input
            v-model="a"
            decimal="1"
            :thousand="true"
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
    },
    watch: {
        a(val) {
            console.log(val)
        }
    }
}
</script>
<style lang='less' scoped>
</style>
