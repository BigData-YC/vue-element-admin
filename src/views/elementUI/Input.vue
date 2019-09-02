<template>
  <div>
    <el-input
      v-model="textarea"
      type="textarea"
      :rows="30"
      placeholder="请输入内容"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
