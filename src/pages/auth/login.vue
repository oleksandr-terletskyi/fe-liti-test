<template>
  <div class="page">
    <div class="form__wrapper">
      <div class="error" v-if="error">{{ error }}</div>
      <h1>Login</h1>
      <form @submit.prevent="handleSubmit()">
        <div>
          <FormLabel label-for="email">Email</FormLabel>
          <FormInput
            :error="form.email.touched && !emailValidation()"
            type="email"
            id="email"
            v-model="form.email.value"
          ></FormInput>
        </div>
        <div>
          <FormLabel label-for="password">Password</FormLabel>
          <FormInput
            :error="form.password.touched && !passwordValidation()"
            type="password"
            id="password"
            v-model="form.password.value"
          ></FormInput>
          <FormHelptext v-if="form.password.touched && !passwordValidation()">{{
            form.password.error
          }}</FormHelptext>
        </div>
        <button :disabled="disabled" @submit.prevent="handleSubmit()">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  useRouter,
} from '@nuxtjs/composition-api'
import { useAppStore } from '~/src/entities/app.store'
import FormInput from '~/src/shared/ui/form/ui/FormInput.vue'
import FormLabel from '~/src/shared/ui/form/ui/FormLabel.vue'
import FormHelptext from '~/src/shared/ui/form/ui/FormHelptext.vue'
export default defineComponent({
  name: 'login',
  components: { FormHelptext, FormLabel, FormInput },
  layout: 'auth',
  setup() {
    const $router = useRouter()
    const error = ref('')
    const form = reactive({
      email: {
        value: '',
        touched: false,
      },
      password: {
        value: '',
        touched: false,
        error: '',
      },
    })
    watch(
      () => form.email.value,
      () => (form.email.touched = true)
    )
    watch(
      () => form.password.value,
      () => (form.password.touched = true)
    )
    const passwordValidation = () => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*\-_'"])(?=.{3,20})/
      const password = form.password.value

      const matchedLength = /^.{3,20}$/.test(password)
      if (!matchedLength) {
        form.password.error = 'Password must contain from 3 to 20 symbols'
        return false
      }
      const smallLetters = /^(?=.*[a-z])/.test(password)
      if (!smallLetters) {
        form.password.error = 'Password must contain at least 1 small letter'
        return false
      }
      const capitalLetters = /^(?=.*[A-Z])/.test(password)
      if (!capitalLetters) {
        form.password.error = 'Password must contain at least 1 capital letter'
        return false
      }
      const digits = /^(?=.*[0-9])/.test(password)
      if (!digits) {
        form.password.error = 'Password must contain at least 1 digit'
        return false
      }
      const specialChars = /^(?=.*[~!@#$%^&*\-_'"])/.test(password)
      if (!specialChars) {
        form.password.error = `Password must contain at least 1 special character (~!@#$%^&*-_'")`
        return false
      }
      return true
    }
    const emailValidation = () => {
      return !!form.email.value.length
    }
    const disabled = computed(() => {
      return !passwordValidation() || !emailValidation()
    })
    const store = useAppStore()
    const handleSubmit = () => {
      error.value = ''
      const password = `TesteR@007"`
      const email = 'tester@test.com'
      if (form.password.value !== password || form.email.value !== email) {
        error.value = 'Password or email is invalid'
        return false
      }
      const formValue = {
        email: form.email.value,
        password: form.password.value,
      }
      store.logIn(formValue)
      $router.push('/auth/secret')
    }
    return {
      form,
      handleSubmit,
      disabled,
      passwordValidation,
      emailValidation,
      error,
    }
  },
})
</script>

<style scoped lang="scss">
@import 'assets/scss/variables';
.page {
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form__wrapper {
    border: 1px solid $c-grey-900;
    max-width: 600px;
    padding: 16px 10px;
    width: 100%;
    & > * {
      max-width: calc(100% - 20px);
    }
  }
}
</style>
