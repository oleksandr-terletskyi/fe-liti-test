<template>
  <button-regular
    :class="$style.comp"
    :size="size"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button-regular>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import ButtonRegular from './ButtonRegular.vue'

export default defineComponent({
  components: {
    ButtonRegular,
  },
  props: {
    size: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped module>
@import '~/assets/scss/variables';

.comp {
  $self: &;

  padding: 0 16px;
  color: $black;
  background-color: $white;
  border: 1px solid #e8ebf3; // TODO заменить

  &:active {
    background-color: #e5e5ea; // TODO заменить
  }
  &[disabled] {
    background-color: $white;
  }
}
</style>
