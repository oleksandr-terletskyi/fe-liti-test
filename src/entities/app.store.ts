import { defineStore } from 'pinia'

type User = {
  email: string
  password: string
}
type AppStoreState = {
  loading: boolean
  user: User | {}
  isLoggedIn: boolean
}
export const useAppStore = defineStore('app', {
  state: (): AppStoreState => {
    return {
      loading: true,
      user: {},
      isLoggedIn: false,
    }
  },
  getters: {},
  actions: {
    logIn(user: User) {
      this.$state.user = user
      this.$state.isLoggedIn = true
    },
    logOut() {
      this.$state.user = {}
      this.$state.isLoggedIn = false
    },
    updateEmail(email: string) {
      // @ts-ignore
      this.$state.user = {
        ...this.$state.user,
        email,
      }
    },
  },
})
