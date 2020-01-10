<template>
    <div>
        <g-input
            v-model="a"
            decimal="2"
            thousand
            style="width: 300px;"
        ></g-input>
        <span>{{cmodel.b}}</span>
    </div>
</template>

<script>
import GInput from 'components/input/src/input.vue'
export default {
    computed: {
        cmodel() {
            return {
                b: this.a * 100
            }
        }
    },
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
