<template>
    <div class="g-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GCheckboxGroup',
    props: {
        value: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    },
    created() {
        this.$gEventBus.$on('aaa', val => {
            console.log(val)
        })
    },
    watch: {
        value: {
            handler() {
                console.log(123456)
                this.$gEventBus.$emit('gDefaultChecked', this.value)
            },
            immediate: true
        }
    }
}
</script>
