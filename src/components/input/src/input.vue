<template>
    <div
        class="g-input-wrapper"
        ref="inputWrapper"
    >
        <span ref="showSpan">{{showValue}}</span>
        <el-input
            v-model="currentValue"
            @input="input"
            @blur="blur"
            @focus="focus"
            @clear="$emit('clear')"
        ></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentValue: this.value
        }
    },
    props: {
        value: [String, Number],
        decimal: {
            type: [String, Number],
            default: 0
        },
        thousand: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showValue() {
            let val = parseFloat(this.currentValue).toFixed(this.decimal)
            if (this.thousand) {
                return this.toThousand(val)
            }
            return val
        }
    },
    methods: {
        blur() {
            this.$refs.showSpan.style.display = 'inline-block'
            let input = document.getElementsByTagName('input')[0]
            input.style.color = 'transparent'
            this.$emit('blur')
        },
        focus() {
            this.$refs.showSpan.style.display = 'none'
            let input = document.getElementsByTagName('input')[0]
            let c = window.getComputedStyle(this.$refs.inputWrapper).color
            input.style.color = c
            this.$emit('focus')
        },
        input() {
            this.$emit('input', this.currentValue)
        },
        toThousand(num) {
            let arr = (num + '').split('.')
            let str = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
            return str + (arr[1] ? '.' + arr[1] : '')
        },
        removeThousand(num) {
            return num.replace(',', '')
        }
    }
}
</script>
