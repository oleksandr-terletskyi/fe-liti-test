<script lang="ts">
import {
  defineComponent, reactive,
} from '@nuxtjs/composition-api'


interface IEditForm {
  email: string
}

export default defineComponent({
  name: 'EditForm',
  setup() {
    const editFormState: IEditForm = reactive({
      email: '',
    });

    const handleEditForm = (e: Event) => {
      console.log(e);
    }

    return {
      editFormState,
      handleEditForm,
    }
  },
})
</script>

<template>
  <form @submit.prevent="handleEditForm">
    <label for="femail">Email:</label><br>
    <input v-model="editFormState.email" type="email" id="femail" placeholder="Example: blabl@tr.ru"><br>
    <button type="submit">Save</button>
  </form>
</template>
