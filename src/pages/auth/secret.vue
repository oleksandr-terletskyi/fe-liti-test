<template>
  <form v-if="visible" @submit.prevent="submitFormEdit">
    <h1>{{formData.email}}</h1>
    <input type="email" @input="validateEmail(formData.email)" v-model="formData.email" placeholder="email">
    <button :disabled="formData.invalid">Save</button>
  </form>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  useRouter
} from '@nuxtjs/composition-api'

import { useAppStore } from "~/src/entities/app.store";

export default defineComponent({
  name: "secret",
  setup() {
    const visible = ref(false);
    const store = useAppStore();
    const router = useRouter();
    const user = computed(() => store.getUser);

    const formData = reactive({
      email: "",
      invalid: true,
      errorMessage: ""
    });

    const submitFormEdit = () => {
      if (!formData.invalid) {
        alert('Successfully edited');
        const userData = { email: formData.email };
        sessionStorage.setItem('user', JSON.stringify(userData));
        store.setUser(userData);
      }
    };

    const validateEmail = email => {
      formData.invalid = email === user.value.email;
    };

    watch(() => store.userLoginState, login => {
      if (!login) router.push('/');
      else {
        visible.value = true;
        formData.email = user.value.email;
      }
    }, { immediate: true });

    return {
      visible,
      formData,
      submitFormEdit,
      validateEmail
    }
  }
});
</script>

<style scoped>

</style>
