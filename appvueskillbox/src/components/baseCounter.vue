<template>
  <div class="product__counter form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="decrement">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="baseAmount" name="count">

    <button type="button" aria-label="Добавить один товар"  @click.prevent="increment">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    baseAmount: {
      get() {
        return this.$store.state.amount;
      },
      set(value) {
        this.$store.commit('updateAmount', value);
      },
    },
  },
  methods: {
    ...mapMutations({
      increment: 'incrementAmount',
      decrement: 'decrementAmount',
    }),
  },
};
</script>

<style>
  button {
    cursor:pointer;
  }
</style>
