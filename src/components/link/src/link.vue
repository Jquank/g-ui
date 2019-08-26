<template>
    <a
        :class="[
            'g-link',
            type?'g-link--'+type:'g-link--default',
            linkDisabled?'is-disabled':'',
            {
                'is-underline': underline && !linkDisabled
            }
        ]"
        :href="disabled?null:href"
        :target="target"
    >
        <i
            v-if="icon"
            :class="'iconfont g-icon-'+icon"
        ></i>
        <span class="g-link-inner">
            <slot></slot>
        </span>
    </a>
</template>

<script>
export default {
    name: 'GLink',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        underline: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: '_blank'
        },
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {
        linkDisabled() {
            return this.disabled
        }
    }
}
</script>
