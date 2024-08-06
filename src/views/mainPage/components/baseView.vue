<template>
  <div class="background">
    <p style="
      margin-top: 25vh;
    ">
      <normal>目前您的小钱包存款为</normal>
    </p>
    <p style="
      margin-top: 1.5vh;
    ">
      <bigger>5000￥元</bigger>
    </p>
    <div style="
      margin-top: 1.5vh;
    ">
      <el-button size="large" color="var(--color-success)" round @click="inVisible = true">收入</el-button>
      <el-button size="large" color="var(--color-danger)" round @click="outVisible = true">支出</el-button>
    </div>

    <el-dialog v-model="inVisible" title="收入登记" width="300" align-center="true">
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="inVisible = false">取消</el-button>
          <el-button type="primary" @click="inVisible = false" color="var(--color-base)">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="outVisible" title="支出登记" width="300" align-center="true">
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outVisible = false">取消</el-button>
          <el-button type="primary" @click="outVisible = false" color="var(--color-base)">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inVisible = ref(false)
const outVisible = ref(false)
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>