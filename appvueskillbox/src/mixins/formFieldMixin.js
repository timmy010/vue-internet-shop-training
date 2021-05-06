import baseFormField from '@/components/baseFormField.vue';

export default {
  components: { baseFormField },
  props: {
    title: String,
    error: {
      type: String,
      default: null,
    },
    placeholder: String,
    value: String,
  },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
