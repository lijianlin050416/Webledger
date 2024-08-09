import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMoneyStore = defineStore('money', () => {
  interface Money {
    userID: string,
    money: number,
    type: string,
    date: string,
    description: string
  }

  const moneyList = reactive<Money[]>([])
})