<template>
    <common-nav :router="router"></common-nav>
</template>

<script>
import CommonNav from 'ex/common/nav'
import router from './router'
export default {
    data() {
        return {
            router: router
        }
    },
    components: {
        CommonNav
    }
}
</script>
