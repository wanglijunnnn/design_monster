<template>
  <div class="editor-aside">
    <div class="editor-aside-container">
      <div class="editor-aside-body">
        <div class="editor-aside-button activated"  @click="showDrawer">
          <IconPageTemplate size="22" />
          <p>模板</p>
        </div>
        <div class="editor-aside-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.497 15L10 3.946l3.598 6.117a5.96 5.96 0 011.972-.592L11.724 2.93c-.773-1.314-2.674-1.314-3.448 0L1.773 13.987C.99 15.32 1.95 17 3.497 17h6.997a6.012 6.012 0 01-.193-2H3.497z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5c0 2.486 2.014 4.5 4.5 4.5s4.5-2.014 4.5-4.5-2.014-4.5-4.5-4.5a4.499 4.499 0 00-4.5 4.5zm-2 0c0 3.59 2.91 6.5 6.5 6.5 3.591 0 6.5-2.91 6.5-6.5S20.091 9 16.5 9c-3.59 0-6.5 2.91-6.5 6.5z"></path></svg>素材</div>
        <div class="editor-aside-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5v14H4V5h16zm0-2a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h16zM8 8.5h8v2h-3v6h-2v-6H8v-2z"></path></svg>文本</div>
        <div class="editor-aside-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.571 11.143a1.714 1.714 0 100-3.429 1.714 1.714 0 000 3.429zM14.024 11.965a2 2 0 012.518-.408l4.536 2.667-1.013 1.724-4.536-2.666-6.205 7.09-1.505-1.316 6.205-7.091z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H4v14h16V5zM4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4z"></path></svg>照片</div>
        <div class="editor-aside-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.274 3.883a1 1 0 01-.141 1.407l-11 8.99a1 1 0 11-1.266-1.548l11-8.99a1 1 0 011.407.14zM21.281 10.884a1 1 0 01-.157 1.405l-10 7.992a1 1 0 11-1.248-1.562l10-7.992a1 1 0 011.405.157zM21.279 16.48a1 1 0 01-.157 1.405l-2.998 2.396a1 1 0 11-1.249-1.562l2.998-2.396a1 1 0 011.405.157zM8.05 3.876a1 1 0 01-.158 1.405L4.125 8.293A1 1 0 012.876 6.73L6.644 3.72a1 1 0 011.405.157zM21.272 4.88a1 1 0 01-.137 1.407l-17 13.985a1 1 0 11-1.27-1.544l17-13.986a1 1 0 011.407.137z"></path></svg>背景</div>
        <div class="editor-aside-button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 8h2.5v8H4V8zM10.75 5h2.5v11h-2.5V5zM17.5 2H20v14h-2.5V2zM22 19v2H2v-2h20z"></path></svg>图表</div>
        <div class="editor-aside-button"><svg viewBox="0 0 28 28"><path d="M23 3a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V8h-2v12h2v-1a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1h-2a2 2 0 01-2-2v-5h-2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v1h2V8a2 2 0 012-2h2V5a2 2 0 012-2h4zm0 16h-4v4h4v-4zM9 12H5v4h4v-4zm14-7h-4v4h4V5z" fill-rule="evenodd"></path></svg>图例</div>
        <div class="editor-aside-button"><svg viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.159L5.163 5.963 12 9.382l6.837-3.419L12 2.16zm-8 13.23V7.618l7 3.5v8.167l-7-3.896zm9 3.896l7-3.896V7.618l-7 3.5v8.167zm8.528-14.113L12.439.114a.902.902 0 00-.878 0L2.472 5.172A.924.924 0 002 5.98v10.04c0 .336.18.646.472.808l9.089 5.058a.902.902 0 00.878 0l9.089-5.058A.924.924 0 0022 16.02V5.98a.924.924 0 00-.472-.808z"></path></svg>我的</div>
    
      </div>
    </div>
    <Drawer
      placement="left"
      :closable="false"
      :maskClosable="false"
      :mask="false"
      :visible="mubanPoolVisible"
      :after-visible-change="afterVisibleChange"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="closeDrawer"
    >
      <p @click="closeDrawer">Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'editor-aside',
  setup() {
    const mubanPoolVisible = ref(false)
    
    // 显示模板框
    const showDrawer = () => {
      mubanPoolVisible.value = true
    }
    
    const closeDrawer = () => {
      mubanPoolVisible.value = false
    }
    return {
      mubanPoolVisible,
      showDrawer,
      closeDrawer
    }
  },
})
</script>

<style lang="scss" scoped>
  .editor-aside {
    position: relative;
    width: 60px;
    height: calc(100% - 40px);
  }
  .editor-aside-body {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .editor-aside-button {
      text-align: center;
      position: relative;
      padding: 12px 0;
      font-size: 12px;
      font-weight: 500;
      line-height: 17px;
      color: #9da3ac;
      background: #fff;
      border: none;
      outline: none;
      width: 100%;
      cursor: pointer;
      border-radius: 0;
      word-break: break-all;
      user-select: none;
      svg {
        width: 24px;
        display: block;
        margin: 0 auto;
      }
    }
    .editor-aside-button.activated, .editor-aside-button:active {
      color: #2354f4;
    }
  }
</style>
