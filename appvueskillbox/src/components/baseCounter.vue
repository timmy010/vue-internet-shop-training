<template>
  <div class="product__counter form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="baseAmount--">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="baseAmount" name="count">

    <button type="button" aria-label="Добавить один товар"  @click.prevent="baseAmount++">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    amount: Number,
  },
  computed: {
    baseAmount: {
      get() {
        return this.amount;
      },
      set(value) {
        if (value > 0) {
          this.$emit('update:amount', value);
        }
      },
    },
  },
};
</script>

<style>
  button {
    cursor:pointer;
  }
</style>
