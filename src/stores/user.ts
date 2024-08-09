import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isLogin = ref(false)
  const user = reactive({
    userID: '',
    Account: '',
    Password: '',
    Balance: 0,
    firstDate: '',
    lastUse: '',
    yesterdayBalance: 0
  })
})