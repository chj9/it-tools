<template>
  <router-link to="/about" #="{ navigate, href }" custom>
    <n-tooltip trigger="hover">
      <template #trigger>
        <n-button tag="a" :href="href" circle quaternary size="large" aria-label="关于" @click="navigate">
          <n-icon size="25" :component="InfoCircle" />
        </n-button>
      </template>
      关于
    </n-tooltip>
  </router-link>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button size="large" circle quaternary aria-label="Toggle dark/light mode" @click="switchLang">
        <n-icon size="25" :component="LanguageSharp" />
      </n-button>
    </template>
    <span v-if="currentLocale == 'zh-CN'">Switch to Englisth</span>
    <span v-else>切换成中文</span>
  </n-tooltip>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button size="large" circle quaternary aria-label="Toggle dark/light mode" @click="isDarkTheme = !isDarkTheme">
        <n-icon v-if="isDarkTheme" size="25" :component="Sun" />
        <n-icon v-else size="25" :component="Moon" />
      </n-button>
    </template>
    <span v-if="isDarkTheme">白天</span>
    <span v-else>黑夜</span>
  </n-tooltip>
</template>

<script setup lang="ts">
import { useStyleStore } from '@/stores/style.store';
import { InfoCircle, Moon, Sun } from '@vicons/tabler';
import useLocale from '@/i18n/hook/useLocale'; // 国际化hook
import { LanguageSharp } from '@vicons/ionicons5';

import { toRefs } from 'vue';

const styleStore = useStyleStore();
const { isDarkTheme } = toRefs(styleStore);

const {
  i18n: { t }, // 解构实例用具t 访问语言变量
  currentLocale, //当前国际化
  changeLocale, // 修改国际化
} = useLocale();

// 切换语言
const switchLang = () => {
  if (currentLocale.value == 'zh-CN') {
    changeLocale('en-US');
  } else {
    changeLocale('zh-CN');
  }
};
</script>

<style lang="less" scoped>
.n-button {
  &:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
