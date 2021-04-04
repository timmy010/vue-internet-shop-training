<template>
  <ul class="catalog__list">
    <li
      is="productItem"
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    ></li>
  </ul>
</template>

<script>
import productItem from './productItem.vue';

export default {
  components: { productItem },
  props: ['products'],
};
</script>
