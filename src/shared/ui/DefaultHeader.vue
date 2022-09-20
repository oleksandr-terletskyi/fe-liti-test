<template>
  <header class="header">
    <div class="header__container">
      <div class="header__block">
        <nuxt-link to="/">TESTOVOE</nuxt-link>
      </div>
      <div class="header__block">
        <nav>
          <ul>
            <li v-for="(navItem, i) in navList" :key="i">
              <nuxt-link :to="navItem">{{ i }}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__block" v-if="isLoggedIn"></div>
      <div class="header__block" v-if="isLoggedIn">
        <span>{{ user?.email }}</span
        ><button @click="logout()">Logout</button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, useRouter } from '@nuxtjs/composition-api'
import { useAppStore } from '~/src/entities/app.store'
import {
  NON_AUTHORIZED_ROUTE_NAV,
  AUTHORIZED_ROUTE_NAV,
} from '~/src/shared/config'
export default defineComponent({
  name: 'DefaultHeader',
  setup() {
    const $router = useRouter()
    const store = useAppStore()
    const isLoggedIn = computed(() => store.isLoggedIn)
    const user = store.user
    function logout() {
      store.logOut()
      $router.push('/')
    }
    const navList = computed(() => {
      if (isLoggedIn.value) {
        return AUTHORIZED_ROUTE_NAV
      } else {
        return NON_AUTHORIZED_ROUTE_NAV
      }
    })
    return { navList: navList.value, isLoggedIn: isLoggedIn.value, user, logout }
  },
})
</script>

<style scoped lang="scss">
.header__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    gap: 12px;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: black;
    &.nuxt-link-exact-active {
      font-weight: bold;
    }
  }
  .header__block {
    display: flex;
    gap: 4px;
  }
}
</style>
