<template>
  <ul class="catalog__list">
    <li class="catalog__item">
      <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}">
        <img :src="product.image" alt="Название товара">
      </router-link>
      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>
      <span class="catalog__price">
        {{ product.price | numberFormat}} ₽
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
import baseColors from '@/components/baseColors.vue';
import colors from '@/data/colors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      localColor: this.product.colorsId[0],
    };
  },
  methods: {
    gotoPage,
  },
  components: { baseColors },
  props: ['product'],
  filters: {
    numberFormat,
  },
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
