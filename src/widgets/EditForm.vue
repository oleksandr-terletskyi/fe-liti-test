<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'


export default defineComponent({
  name: 'EditForm',
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
    <button type="submit">Save</button>
  </form>
</template>
