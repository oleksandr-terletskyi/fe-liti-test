<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'


export default defineComponent({
    name: "Login",
})
</script>

<template>
  <div :class="$style.page">
    <h2>
      Login
    </h2>
    <LoginForm/>
  </div>
</template>

<style lang="scss" scoped module>
@import '~/assets/scss/variables';

.page {
  $self: &;

  // Desktop
  @media screen and (min-width: 1024) {
    width: 300px;
    margin: auto;
  }
}
</style>
