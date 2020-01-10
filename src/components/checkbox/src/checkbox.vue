<template>
    <label class="g-checkbox">
        <span @click="handleClick" :class="['g-checkbox__inner', isChecked ? 'is-checked' : '']"></span>
        <input type="checkbox" class="g-checkbox__original" />
        <span @click="handleClick" :class="['g-checkbox__label', isChecked ? 'is-checked' : '']">选项1</span>
    </label>
</template>

<script>
export default {
    data() {
        return {
            isChecked: false
        }
    },
    methods: {
        handleClick() {
            this.isChecked = !this.isChecked
        }
    }
}
</script>
