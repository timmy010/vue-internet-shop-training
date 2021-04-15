<template>
  <ul class="catalog__list">
    <li
      is="productItem"
      v-for="product in products"
      :key="product.id"
      :product="product"
      :colors-id.sync="colorsId"
      @update:colorsId="$emit('update:colorsId')"
    ></li>
  </ul>
</template>

<script>
import productItem from './productItem.vue';

export default {
  components: { productItem },
  props: ['products', 'colorsId'],
};
</script>
