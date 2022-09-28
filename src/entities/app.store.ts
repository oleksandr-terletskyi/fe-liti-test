import { defineStore } from 'pinia'

type AppStoreState = {
  loading: boolean,
  email: string,
}
export const useAppStore = defineStore('app', {
  state: (): AppStoreState => {
    return {
      loading: true,
      email: '',
    }
  },
  getters: {},
  actions: {},
})
