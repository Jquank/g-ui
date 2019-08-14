<template>
    <button
        class="g-button"
        :class="[type?'g-button--'+type:'', buttonSize?'g-button--'+buttonSize:'',
            {

            }
        ]"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'GButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: ''
        }
    },
    computed: {
        buttonSize() {
            return this.size
        }
    }
}
</script>
