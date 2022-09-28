<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'


export default defineComponent({
  name: 'Secret',
})
</script>

<template>
  <div :class="$style.page">
    <h2>
      Secret page
    </h2>
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
