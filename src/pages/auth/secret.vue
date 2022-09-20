<template>
  <div>
    <h1>{{ user?.email }}</h1>
    <div>
      <form @submit.prevent>
        <FormLabel label-for="email">Email</FormLabel>
        <FormInput type="email" id="email" v-model="email"></FormInput>
        <button @click.prevent="handleSubmit()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useRouter,
  ref,
  computed,
} from '@nuxtjs/composition-api'
import { useAppStore } from '~/src/entities/app.store'
import FormLabel from '~/src/shared/ui/form/ui/FormLabel.vue'
import FormInput from '~/src/shared/ui/form/ui/FormInput.vue'
export default defineComponent({
  name: 'secret',
  components: { FormInput, FormLabel },

  setup() {
    const $router = useRouter()
    const store = useAppStore()
    if (!store.isLoggedIn) {
      $router.push('/')
    }
    const user = computed(() => store.user)
    const email = ref(store.user?.email)
    function handleSubmit() {
      store.updateEmail(email.value || '')
      console.log(store.user)
    }
    return { user, email, handleSubmit }
  },
})
</script>

<style scoped></style>
