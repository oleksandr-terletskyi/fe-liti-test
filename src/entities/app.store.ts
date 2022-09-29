import { defineStore } from 'pinia'

type AppStoreState = {
  loading: boolean,
  userLoggedIn: boolean,
  userData: object,
}
export const useAppStore = defineStore('app', {
  state: (): AppStoreState => {
    return {
      loading: true,
      userLoggedIn: false,
      user: null
    }
  },
  getters: {
    userLoginState(state) {
      return state.userLoggedIn;
    },
    getUser(state) {
      return state.user;
    }
  },
  actions: {
    setUserLoginStatus(status) {
      this.userLoggedIn = status;
    },
    setUser(user) {
      this.user = user;
    }
  },
})
