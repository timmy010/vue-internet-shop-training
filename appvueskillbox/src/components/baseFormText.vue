<template>
  <baseFormField :title="title" :error="error">
    <input class="form__input" v-model="dataValue" :type="inputType" :placeholder="placeholder">
  </baseFormField>
</template>

<script>
import formFieldMixin from '../mixins/formFieldMixin';

export default {
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
  },
  mixins: [
    formFieldMixin,
  ],
};
</script>
