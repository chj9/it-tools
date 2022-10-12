<template>
  <n-card>
    <n-form-item label="Your raw json">
      <n-input
        ref="inputElement"
        v-model:value="rawJson"
        placeholder="Paste your raw json here..."
        type="textarea"
        rows="20"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      />
    </n-form-item>
  </n-card>
  <n-card>
    <n-form-item label="Your raw json">
      <b-ace-editor
        v-model="jsonStr"
        lang="json"
        width="100%"
        height="500"
        theme="xcode"
        :readonly="readonly"
        :font-size="fontSize"
      ></b-ace-editor>
    </n-form-item>
  </n-card>

  <n-col span="12">
    <div class="pl-15">
      <div class="pl-15">
        <n-space>
          <n-button size="small" type="primary" @click="handleFormat">格式化</n-button>
          <n-button size="small" type="primary" @click="modal = true">弹窗编辑</n-button>
          <n-button size="small" type="primary" @click="handleZip">压缩</n-button>

          <n-modal v-model="modal" title="弹窗编辑" transition-name="fade-in-linear">
            <b-ace-editor v-model="jsonStr" height="400"></b-ace-editor>
          </n-modal>
        </n-space>
      </div>
    </div>
  </n-col>
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
      rawJson: '',
      modal: false,
      readonly: false,
      theme: 'chrome',
      fontSize: 14,
    };
  },
  methods: {
    handleZip() {
      this.jsonStr = JSON.stringify(JSON.parse(this.rawJson), null, 0);
    },
    handleFormat() {
      this.jsonStr = JSON.stringify(JSON.parse(this.rawJson), null, 2);
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
