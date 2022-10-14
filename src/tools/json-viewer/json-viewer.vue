<template>
  <n-card>
    <b-ace-editor
      v-model="jsonStr"
      lang="json"
      width="100%"
      height="500"
      theme="xcode"
      :readonly="readonly"
      :font-size="fontSize"
    ></b-ace-editor>
  </n-card>
  <n-space>
    <n-button size="small" type="primary" @click="handleFormat">{{ $t('format') }}</n-button>
    <n-button size="small" type="primary" @click="handleZip">{{ $t('compression') }}</n-button>
  </n-space>
</template>

<script>
const jsonData = {
  title: '测试json数据',
  child: [
    {
      title: '子项名称1',
      desc: '子项描述1',
    },
    {
      title: '子项名称2',
      desc: '子项描述2',
    },
  ],
};
export default {
  data() {
    return {
      jsonStr: JSON.stringify(jsonData, null, 2),
      readonly: false,
      theme: 'chrome',
      fontSize: 14,
    };
  },
  methods: {
    handleZip() {
      this.jsonStr = JSON.stringify(JSON.parse(this.jsonStr), null, 0);
    },
    handleFormat() {
      this.jsonStr = JSON.stringify(JSON.parse(this.jsonStr), null, 2);
    },
  },
};
</script>

<style lang="less" scoped>
.result-card {
  position: relative;

  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
