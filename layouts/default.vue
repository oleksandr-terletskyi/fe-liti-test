<template>
  <div>
    <GNavigation :nav-links="ROUTE_NAV" />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import {
  watch,
  useRoute,
  defineComponent,
  onMounted
} from '@nuxtjs/composition-api';
import {useAppStore} from "~/src/entities/app.store";

import GNavigation from "~/components/GNavigation.vue";

import { ROUTE_NAV } from "~/src/shared/config";

export default defineComponent({
  name: 'IndexPage',
  components: {
    GNavigation,
  },
  setup() {
    const store = useAppStore();
    const route = useRoute();

    const checkIfUserExist = () => {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user) {
        store.setUser(user);
        store.setUserLoginStatus(true);
      }
    }

    watch(() => route.value.name, () => {
      checkIfUserExist();
    });

    onMounted(() => {
      checkIfUserExist();
    });

    return {
      ROUTE_NAV,
    }
  },
})
</script>
