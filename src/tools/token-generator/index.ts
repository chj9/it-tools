import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Token 生成',
  path: '/token-generator',
  description:
    '自动生成的包含所需字符的随机字符串：大写或小写字母、数字和 / 或符号。',
  keywords: ['token', 'random', 'string', 'alphanumeric', 'symbols', 'number', 'letters', 'lowercase', 'uppercase'],
  component: () => import('./token-generator.tool.vue'),
    icon: ArrowsShuffle,
});
