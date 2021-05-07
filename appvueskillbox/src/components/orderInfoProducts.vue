<template>
  <ul class="cart__orders">
    <li
      class="cart__order"
      v-for="product in this.products"
      :key="product.product.productId"
    >
      <h3>{{ product.product.title }}</h3>
      <b>{{ product.product.price | numberFormat }} ₽</b>
      <span>Артикул: {{ product.product.id }}</span>
    </li>
  </ul>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  props: {
    products: Array,
  },
  filters: {
    numberFormat,
  },
};
</script>
