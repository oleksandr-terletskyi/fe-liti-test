<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  watch,
  SetupContext,
  onMounted,
} from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    error: {
      type: Boolean,
      default: false,
    },
    warning: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }: SetupContext) {
    const newVal = ref()
    const computedValue = computed({
      get() {
        return newVal.value
      },
      set(value: string) {
        emit('input', value)
      },
    })

    watch(
      () => props.value,
      () => (newVal.value = props.value)
    )

    onMounted(() => {
      newVal.value = props.value
    })

    return {
      computedValue,
    }
  },
})
</script>

<template>
  <input
    v-model="computedValue"
    :type="type"
    :class="{
      [$style.comp]: true,
      [$style.comp__error]: error,
      [$style.comp__warning]: warning,
    }"
    v-bind="$attrs"
  />
</template>

<style lang="scss" scoped module>
@import '~/assets/scss/variables';

.comp {
  $self: &;

  width: 100%;
  max-width: 100%;
  padding: 14px 12px;
  border: 1px solid #dddde2;
  background-color: #fff;
  border-radius: 8px;
  color: $c-grey-900;
  appearance: none;
  align-items: center;
  @include typography-h6-regular;

  &::placeholder {
    color: $c-grey-600;
    @include typography-h6-regular;
  }
  &:focus,
  &:focus-visible,
  &:active,
  &:hover {
    border-width: 1px;
    border-color: $c-grey-900;
    outline: $c-grey-900;
  }
  &:invalid,
  &__error {
    border-color: $c-moscow;
  }
  &__warning {
    border-color: $c-butter;
  }
  &[disabled] {
    cursor: not-allowed;
    background: #f4f4f4;
    color: $c-grey-500;
    border-color: #f4f4f4;

    #{ $self }:focus,
    #{ $self }:focus-visible,
    #{ $self }:active,
    #{ $self }:hover,
    #{ $self }:invalid,
    #{ $self }__error,
    #{ $self }__warning {
      border-color: #f4f4f4;
      outline: transparent;
      color: $c-grey-500;
    }
  }
}
</style>
