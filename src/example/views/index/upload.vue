<template>
    <div class="g-upload">
        <ul
            class="g-upload-list"
            ref="gUploadList"
        >
            <li
                v-for="(item, index) in fileList"
                :key="index"
            >
                <span v-if="!item.name">{{placeholder}}</span>
                <span>{{item.name}}</span>
            </li>
        </ul>
        <el-upload
            ref="gUploadButton"
            class="g-upload-button"
            :action="action"
            :on-change="handleChange"
            :on-progress="progress"
            :on-success="success"
            :on-error="error"
            :limit="limit"
            :disabled="disabled"
        >
            <el-button
                size="small"
                type="primary"
                :loading="loading"
            >点击上传</el-button>
        </el-upload>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [{}],
            loading: false,
            disabled: false
        }
    },
    props: {
        placeholder: String,
        action: {
            type: String,
            default: 'https://jsonplaceholder.typicode.com/posts/'
        },
        limit: Number
    },
    watch: {
        fileList() {
            this.$nextTick(() => {
                this.setLiHeight()
            })
        }
    },
    mounted() {
        let ul = this.$refs.gUploadButton.$el.children[1]
        if (ul) {
            ul.style.display = 'none'
        }
        this.setLiHeight()
    },
    methods: {
        handleChange(file, fileList) {
            if (file.status === 'success') {
                this.fileList = fileList
            }
            this.$emit('change', file, fileList)
        },
        setLiHeight() {
            let h = this.$refs.gUploadButton.$el.children[0].clientHeight
            let lis = this.$refs.gUploadList.children
            for (let i = 0; i < lis.length; i++) {
                const el = lis[i]
                el.style.height = h + 'px'
                el.style.lineHeight = h + 'px'
            }
        },
        progress() {
            this.loading = true
            this.disabled = true
        },
        success() {
            this.loading = false
            this.disabled = false
        },
        error() {
            this.loading = false
            this.disabled = false
        }
    }
}
</script>
