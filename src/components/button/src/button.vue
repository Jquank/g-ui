<template>
    <button
        type="button"
        :disabled="buttonDisabled"
        class="g-button"
        :class="[
            type ? 'g-button--' + type : '',
            buttonSize ? 'g-button--' + buttonSize : '',
            {
                'is-disabled': buttonDisabled
            }
        ]"
    >
        <i v-if="icon" :class="'iconfont g-icon-' + icon"></i>
        <i v-if="loading" class="iconfont g-icon-loading"></i>
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'GButton',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonSize() {
            return this.size
        },
        buttonDisabled() {
            return this.disabled
        }
    }
}
</script>
