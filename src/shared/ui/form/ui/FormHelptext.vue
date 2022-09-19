<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <div
    v-if="$slots.default"
    :class="{
      [$style.comp]: true,
      [$style.comp__error]: error,
      [$style.comp__warning]: warning,
    }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped module>
@import '~/assets/scss/variables';

.comp {
  $self: &;

  margin-top: 4px;
  text-align: left;
  @include typography-h7-regular;

  &__error {
    color: $c-moscow;
  }
  &__warning {
    color: $c-butter;
  }
}
</style>
