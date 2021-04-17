<template>
  <ul class="catalog__list">
    <li class="catalog__item">
      <a class="catalog__pic" href="#">
        <img :src="product.image" alt="Название товара">
      </a>
      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>
      <span class="catalog__price">
        {{ product.price }} ₽
      </span>
      <baseColors
        :colors="colors"
        :colorsId.sync="localColor"
        class="productColor"
      />
    </li>
  </ul>
</template>

<script>
import baseColors from './baseColors.vue';
import colors from '../data/colors';

export default {
  data() {
    return {
      localColor: this.product.colorsId[0],
    };
  },
  components: { baseColors },
  props: ['product', 'colorsId'],
  computed: {
    colors() {
      return this.product.colorsId.map((c) => colors.find((b) => b.id === c));
    },
  },
};
</script>

<style>
  ul.colors.productColor {
    --border-color: black;
  }
</style>
