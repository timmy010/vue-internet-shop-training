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
        :colors="product.colors"
        :colorsId.sync="localColor"
        class="productColor"
      />
    </li>
  </ul>
</template>

<script>
import baseColors from '@/components/baseColors.vue';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
    return {
      localColor: this.product.colors[0].id,
    };
  },
  methods: {
    gotoPage,
  },
  components: { baseColors },
  props: {
    product: Object,
  },
  filters: {
    numberFormat,
  },
};
</script>

<style>
  .catalog li.colors__item {
    --border-color: black;
  }
</style>
