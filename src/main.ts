import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register';
import Editor from 'bin-editor-next';
import * as ace from 'brace';
import { plausible } from './plugins/plausible.plugin';
import i18n from './i18n'; //引入国际化
import 'brace/ext/emmet';
import 'brace/ext/language_tools';
import 'brace/mode/json';
import 'brace/snippets/json';
import 'brace/theme/chrome';
import { naive } from './plugins/naive.plugin';
import App from './App.vue'; // 导入App组件
import router from './router';
registerSW();
const app = createApp(App); // 创建App实例 传入渲染组件
app.use(createPinia());
app.use(createHead());
app.use(router);
app.use(naive);
app.use(plausible);
app.use(i18n); // 挂载国际化配置
app.component(Editor.name, Editor);
app.mount('#app');
