<template>
  <nav>
    <ul>
      <nuxt-link v-for="(link, idx) in navLinks"
                 :key="idx"
                 :to="link.path">{{ link.title }}</nuxt-link>
    </ul>
    <span>{{userEmail}}</span>
    <button v-if="userLoggedIn" @click="logout">Logout</button>
  </nav>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
} from '@nuxtjs/composition-api'
import {useAppStore} from "~/src/entities/app.store";

export default defineComponent({
  props: {
    navLinks: {
      type: Array,
      required: true
    }
  },
  setup() {
    const store = useAppStore();
    const userLoggedIn = computed(() => store.userLoginState);
    const userEmail = computed(() => userLoggedIn.value ? store.getUser.email : '');
    const logout = () => {
        store.setUser(null);
        store.setUserLoginStatus(false);
        sessionStorage.clear();
    };

    return{
      logout,
      userEmail,
      userLoggedIn
    }
  }
});
</script>

<style scoped>

</style>
