<template>
  <div>
    <h1>可以多选的</h1>
    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <br><br>
    <el-select
      v-model="value2"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <br><br>
    <h1>添加多选的</h1>
    <el-select v-model="value4" clearable placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <br><br>
    <h1>有提示的</h1>
    <el-select v-model="value5" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
    <br><br>
    <h1>有添加的</h1>
    <el-select
      v-model="value6"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <p>value6: {{ value6 }}</p>
  </div>

</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value1: [],
      value2: [],
      value4: [],
      value5: [],
      value6: []
    }
  }
}
</script>
