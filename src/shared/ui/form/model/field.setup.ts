import { computed } from '@nuxtjs/composition-api'

export function useField() {
  const labelFor = computed(() => 'f-' + Math.random().toString())

  return {
    labelFor,
  }
}
