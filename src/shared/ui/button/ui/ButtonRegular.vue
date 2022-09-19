<template>
  <button
    type="button"
    :class="{
      [$style.comp]: true,
      [$style.comp__50]: size === '50',
      [$style.comp__44]: size === '44',
      [$style.comp__32]: size === '32',
    }"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    size: {
      type: String as () => '50' | '44' | '32',
      default: '44',
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

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  outline: none;
  user-select: none;
  transition: 0.25s;
  @include typography-button-medium;

  &:hover {
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.26);
  }
  &:active {
    box-shadow: none;
  }
  &[disabled] {
    color: #6f7580; // TODO заменить
    cursor: not-allowed;
    background-color: #e8ebf3; // TODO заменить

    &:hover {
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
      background-color: #e8ebf3; // TODO заменить
    }
  }
  &#{ $self }__32 {
    height: 32px;
    border-radius: 8px;
  }
  &#{ $self }__44 {
    height: 44px;
  }
  &#{ $self }__50 {
    height: 50px;
  }
}
</style>
