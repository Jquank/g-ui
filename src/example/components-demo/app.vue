<template>
  <div id="components-demo">index</div>
</template>

<script>
export default {}
</script>

<style lang="less">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 1140px;
    height: 100%;
    margin: 0 auto;
    .container {
        display: flex;
        height: 100%;
        .nav {
            flex: 0 0 180px;
            .my-nav {
                height: 100%;
                .el-menu {
                    height: 100%;
                }
            }
        }
        .content {
            flex: 1;
            padding: 15px;
        }
    }
}
</style>
