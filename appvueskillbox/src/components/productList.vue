<template>
  <ul class="catalog__list">
    <li
      is="productItem"
      v-for="product in products"
      :key="product.id"
      :product="product"
      :check-color="filterColor"
    ></li>
  </ul>
</template>

<script>
import productItem from './productItem.vue';

export default {
  components: { productItem },
  props: ['products', 'filterColor'],
};
</script>
