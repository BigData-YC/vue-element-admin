<template>
  <div>
    <el-button :plain="true" @click="open5">消息</el-button>
    <el-button :plain="true" @click="open6">成功</el-button>
    <el-button :plain="true" @click="open7">警告</el-button>
    <el-button :plain="true" @click="open8">错误</el-button>
  </div>

</template>

<script>
export default {
  methods: {
    open5() {
      this.$message({
        message: '这是一条消息提示',
        center: true
      })
    },

    open6() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },

    open7() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        center: true
      })
    },

    open8() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      })
    }
  }
}
</script>
