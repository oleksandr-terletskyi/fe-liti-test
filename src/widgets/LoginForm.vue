<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'


export default defineComponent({
  name: 'LoginForm',
  setup() {

    return {
    }
  },
})
</script>

<template>
  <form>
    <label for="femail">Email:</label><br>
    <input type="email" id="femail" placeholder="Example: blabl@tr.ru"><br>
    <label for="fpass">Password:</label><br>
    <input type="password" id="fpass"><br><br>
    <button type="submit">Login</button>
  </form>
</template>
