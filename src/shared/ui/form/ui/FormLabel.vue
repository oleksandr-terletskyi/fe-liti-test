<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    labelFor: {
      type: String,
      default() {
        return 'l-' + Math.random().toString()
      },
    },
  },
})
</script>

<template>
  <label :class="$style.comp" :for="labelFor">
    <slot />
  </label>
</template>

<style lang="scss" scoped module>
@import '~/assets/scss/variables';

.comp {
  $self: &;

  display: block;
  margin-bottom: 4px;
  color: $c-grey-900;
  text-align: left;
  font-weight: 500 !important;
  @include typography-h6-medium;
}
</style>
