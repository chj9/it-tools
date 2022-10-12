<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ title: 'About - IT Tools' });
</script>

<template>
  <div class="about-page">
    <n-h1>About</n-h1>
    <n-p>
      IT Tools is open-source (under the MIT license) and free, and will always be, but it cost me money to host and
      renew the domain name, if you want to support my work, and encourage me to add more tools
    </n-p>

    <n-h2>Technologies</n-h2>
    <n-p>
      IT Tools is made in Vue JS (vue 3) with the the naive-ui component library and is hosted and continuously deployed
      by Vercel. Third party open-source libraries are used in some tools, you may find the complete list in the

      file of the repository.
    </n-p>

    <n-h2>Found a bug? A tool is missing?</n-h2>
    <n-p>
      If you need a tool that is currently not present here, and you think can be relevant, you are welcome to submit a
      feature request in the
      <n-button
        type="primary"
        tag="a"
        text
        href="https://github.com/CorentinTh/it-tools/issues/new?assignees=CorentinTh&labels=enhancement&template=feature_request.md&title=%5BFEAT%5D%20My%20feature"
        rel="noopener"
        target="_blank"
      >
        issues section
      </n-button>
      in the github repository.
    </n-p>
    <n-p>
      And if you found a bug, or something broken that doesn't work as expected, please fill a bug report in the
      <n-button
        type="primary"
        tag="a"
        text
        href="https://github.com/CorentinTh/it-tools/issues/new?assignees=CorentinTh&labels=bug&template=bug_report.md&title=%5BBUG%5D%20My%20bug"
        rel="noopener"
        target="_blank"
      >
        issues section
      </n-button>
      in the github repository.
    </n-p>
  </div>
</template>

<style scoped lang="less">
.about-page {
  max-width: 600px;
  margin: 50px auto;
  box-sizing: border-box;

  .n-h2 {
    margin-bottom: 0px;
  }

  .n-p {
    text-align: justify;
  }
}
</style>
