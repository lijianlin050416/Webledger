<template>
  <div class="background">
    <transition>
      <div class="menu" v-show="isOpen">
        <el-dialog v-model="loginVisible" title="登录" width="300" :align-center="true">
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="loginVisible = false">取消</el-button>
              <el-button type="primary" @click="" color="var(--color-base)">
                确认
              </el-button>
            </div>
          </template>
        </el-dialog>
        <el-dialog v-model="signupVisible" title="注册" width="300" :align-center="true">
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="signupVisible = false">取消</el-button>
              <el-button type="primary" @click="" color="var(--color-base)">
                确认
              </el-button>
            </div>
          </template>
        </el-dialog>
        <el-dialog v-model="forgetVisible" title="忘记密码" width="300" :align-center="true">
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="forgetVisible = false">取消</el-button>
              <el-button type="primary" @click="" color="var(--color-base)">
                确认
              </el-button>
            </div>
          </template>
        </el-dialog>
        <div class="block" v-if="isLogin">
          <strong style="font-size: 35px;">
            @用户名123
          </strong>
          <p>收支分析</p>
          <p>查看记录</p>
          <p>修改密码</p>
          <p>退出登录</p>
        </div>
        <div class="block" v-else>
          <strong style="font-size: 35px;">
            请先登录或注册
          </strong>
          <p @click="forgetVisible = true">忘记密码</p>
          <p @click="loginVisible = true">登录</p>
          <p @click="signupVisible = true">注册</p>
        </div>
      </div>
    </transition>
    <el-icon :size="50" @click="isOpen = !isOpen;" class="iconButton"
      :style="{ color: isOpen ? 'var(--color-background)' : 'var(--color-font)' }">
      <Menu />
    </el-icon>
    <button @click="isLogin = !isLogin">666</button>
    <baseView></baseView>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue'
import { ref } from 'vue';

import baseView from './components/baseView.vue';

const isOpen = ref(false)
const isLogin = ref(true)
const loginVisible = ref(false)
const signupVisible = ref(false)
const forgetVisible = ref(false)

</script>

<style scoped>
.background {
  color: var(--color-font);
  background-color: var(--color-background);
  width: 100vw;
  height: 100vh;

  .iconButton {
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
    color: var(--color-background);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-success);
    z-index: 9;
    display: flex;

    .block {
      margin: 10vh 0 0 5vw;
      display: flex;
      flex-direction: column;

      p {
        font-size: 25px;
        margin: 3vh 0 0 10vw;
      }
    }
  }
}
</style>