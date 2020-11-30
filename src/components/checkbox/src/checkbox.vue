<template>
    <label class="g-checkbox">
        <span
            @click="handleClick"
            :class="[
                'g-checkbox__inner',
                isChecked ? 'is-checked' : '',
                isDisabled ? 'is-disabled' : ''
            ]"
        ></span>
        <span
            @click="handleClick"
            :class="[
                'g-checkbox__label',
                isChecked ? 'is-checked' : '',
                isDisabled ? 'is-disabled' : ''
            ]"
        >
            <template v-if="!$slots['default']">{{ label }}</template>
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'GCheckbox',
    data() {
        return {
            isChecked: false,
            isDisabled: false
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        }
    },
    created() {
        this.isDisabled = this.disabled
        setTimeout(() => {
            this.$gEventBus.$on('gDefaultChecked', val => {
                console.log(456789789)
                console.log(val)
                console.log(this.label)
                if (val.indexOf(this.label) > -1) {
                    this.isChecked = true
                } else {
                    this.isChecked = false
                }
            })
        }, 3000)
        // if (this.$parent.$options._componentTag === 'g-checkbox-group') {
        // this.$eventBus.$on('g-default-checked', val => {
        //     console.log(456789789)
        //     console.log(val)
        //     console.log(this.label)
        //     if (val.indexOf(this.label) > -1) {
        //         this.isChecked = false
        //     } else {
        //         this.isChecked = true
        //     }
        // })
        // return
        // }
        // this.isChecked = this.value
    },
    mounted() {},
    methods: {
        handleClick() {
            if (this.isDisabled) {
                return
            }
            this.isChecked = !this.isChecked
            this.$gEventBus.$emit('aaa', this.isChecked)
        }
    }
}
</script>
