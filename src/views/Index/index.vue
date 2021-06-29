<template>
  <div class="grid">
    <ComHeader />
    <ComAside />
    <ComMain />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ComHeader from '../components/layout/Header.vue'
import ComAside from '../components/layout/Aside.vue'
import ComMain from '../components/layout/Mains.vue'

export default defineComponent({
  name: 'Grid',
  components: {
    ComHeader,
    ComAside, 
    ComMain
  },
  setup() {
    
    return {
      
    }
  },
})
</script>

<style lang="scss" scoped>
  .grid {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: minmax(min-content, max-content) 1fr minmax(min-content, max-content);
  }
</style>