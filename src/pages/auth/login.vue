<template>
  <form @submit.prevent="submitForm">
    <fieldset>
      <input type="email" v-model="formData.email">
      <input type="password" @input="validatePassword(formData.password)" v-model="formData.password">
      {{formData.errorMessage}}
      <button :disabled="formData.invalid" type="submit">Login</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  useRouter
} from '@nuxtjs/composition-api'

import {useAppStore} from "~/src/entities/app.store";

export default defineComponent({
  name: "login",
  setup() {
    const store = useAppStore();
    const router = useRouter();
    const formData = reactive({
      email: "",
      password: "",
      invalid: true,
      errorMessage: "",
    });

    const validatePassword = (password) => {
      const validations = {
        minLength(str) {
          const MIN_LENGTH = 3
          return str.length >= MIN_LENGTH
        },

        maxLength(str) {
          const MAX_LENGTH = 20
          return str.length <= MAX_LENGTH
        },

        checkCapitals(str) {
          let capitalLetterExist = false;

          for (let i = 0; i < str.length; i++) {
            if(Number(str[i])) continue;

            if (str[i].toUpperCase() === str[i]) {
              capitalLetterExist = true;
              break;
            }
          }
          return capitalLetterExist;
        },

        checkNumber(str) {
          let numberExist = false;

          for (let i = 0; i < str.length; i++) {
            if(Number(str[i])) {
              numberExist = true
              break;
            }
          }
          return numberExist;
        },

        checkSpecialLetters(str) {
          const specialChars = ["~","!","@","#","$","&","%","-","_","(",")"];
          let specialCharacterExist = false;
          for (let i = 0; i < str.length; i++) {
            if(specialChars.includes(str[i])) {
              specialCharacterExist = true;
              break;
            }
          }
          return specialCharacterExist;
        }
      };
      formData.invalid = !password || checkForInvalidRules(validations, password).length > 0;
      return formData.invalid;
    };

    const checkForInvalidRules = (rules, str) => {
      return Object.keys(rules).reduce((acc, validation) => {
        if (!rules[validation](str)) {
          acc.push(validation);
        }
        return acc;
      }, []);
    };

    const validateEmail = (email) => {
      return email && email.length > 0;
    };

    const submitForm = () => {
      const passwordValid = !validatePassword(formData.password);
      const emailValid = validateEmail(formData.email);
      store.loading = true;
      if (!passwordValid && !emailValid) alert("Form data is invalid");

      loginUser(formData)
        .then(result => {
          if (result.success) {
            sessionStorage.setItem('user', JSON.stringify({
              email: formData.email
            }));
            store.setUser({ email: formData.email });
            store.setUserLoginStatus(true);
            router.push('secret');
          }
        })
        .catch(({ error }) => {
          formData.errorMessage = error;
        })
        .finally(() => {
          store.loading = false;
        })
    };

    const loginUser = ({ login, password }) => {
      const DEFAULT_TIMEOUT_MS = 400;
      const USER_CREDENTIALS = {
        login: "tester@test.com",
        password: "TesteR@007"
      };

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (login !== USER_CREDENTIALS.login && password !== USER_CREDENTIALS.password) {
            reject({ success: false, error: 'login or password incorrect' })
          }
          else resolve({ success: true })
        }, DEFAULT_TIMEOUT_MS)
      });
    };

    return {
      formData,
      validatePassword,
      submitForm
    }
  }
})
</script>

<style scoped>

</style>
