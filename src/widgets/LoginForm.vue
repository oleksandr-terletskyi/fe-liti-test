<script lang="ts">
import {
  defineComponent,
  reactive,
} from '@nuxtjs/composition-api'

interface ILoginForm {
  email: string,
  password: string
}

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const loginFormState: ILoginForm = reactive({
      email: '',
      password: '',
    });

    const handleLogin = (e: Event) => {
      console.log(e);
    }

    return {
      loginFormState,
      handleLogin,
    }
  },
})
</script>

<template>
  <form @submit.prevent="handleLogin">
    <label for="femail">Email:</label><br>
    <input v-model="loginFormState.email" type="email" id="femail" placeholder="Example: blabl@tr.ru"><br>
    <label for="fpass">Password:</label><br>
    <input v-model="loginFormState.password" type="password" id="fpass"><br><br>
    <button type="submit">Login</button>
  </form>
</template>
