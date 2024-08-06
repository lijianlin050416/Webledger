<template>
  <div class="background">
    <transition>
      <div class="menu" v-show="isOpen">
      <p>qwer</p>
      <p>qwer</p>
      <p>qwer</p>
      <p>qwer</p>
      <p>qwer</p>
      <p>qwer</p>
      <p>qwer</p>
      <p>qwer</p>
    </div>
    </transition>
    <el-icon
      :size="50"
      @click="isOpen = !isOpen;"
      class="iconButton"
    >
      <Menu />
    </el-icon>
    <baseView></baseView>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue'
import { ref } from 'vue';

import baseView from './components/baseView.vue';

const isOpen = ref(false);

</script>

<style scoped>
.background {
  color: var(--color-font);
  background-color: var(--color-background);
  width: 100vw;
  height: 100vh;

  .iconButton {
    /* border: 3px solid black; */
    margin: 20px 0 0 20px;
    z-index: 10;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 9;
  }
}
</style>