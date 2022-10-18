<template>
  <n-card>
    <n-space>
      <n-button size="small" type="primary" @click="handleFormat">{{ $t('format') }}</n-button>
      <n-button size="small" type="primary" @click="handleZip">{{ $t('compression') }}</n-button>
    </n-space>
    <n-form-item :feedback="rawJsonValidation.message" :validation-status="rawJsonValidation.status">
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
    <b-ace-editor
      v-model="configData.jsonStr"
      lang="json"
      width="100%"
      height="600"
      theme="xcode"
      :readonly="configData.readonly"
      :font-size="configData.fontSize"
    ></b-ace-editor>
  </n-card>
</template>
<script setup lang="ts">
import { useValidation } from '@/composable/validation';
import JSON5 from 'json5';
import { reactive, ref } from 'vue';
const rawJson = ref('{"hello": "world"}');

const rawJsonValidation = useValidation({
  source: rawJson,
  rules: [
    {
      validator: (v) => v === '' || JSON5.parse(v),
      message: 'Provided JSON is not valid.',
    },
  ],
});

const configData = reactive({
  jsonStr: rawJson,
  readonly: false,
  theme: 'chrome',
  fontSize: 14,
});
const handleZip = () => {
  configData.jsonStr = JSON.stringify(JSON.parse(configData.jsonStr), null, 0);
};
const handleFormat = () => {
  configData.jsonStr = JSON.stringify(JSON.parse(configData.jsonStr), null, 2);
};
</script>

<style lang="less">
.result-card {
  position: relative;

  .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
