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
      <ul class="colors colors--black">
        <li class="colors__item" v-for="color in product.colorsId" :key="color">
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              :value="color"
              :checked="isChecked(color, product.colorsId, checkColor)"
            >
            <span
              class="colors__value"
              :style="{ backgroundColor: getColorValue(color) }"
            >
            </span>
          </label>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import colors from '../data/colors';

export default {
  props: ['product', 'checkColor'],
  computed: {
    colors() {
      return colors;
    },
  },
  methods: {
    getColorValue(productColor) {
      return colors.find((colorObj) => colorObj.id === productColor).value;
    },
    isChecked(color, arr, checkColor) {
      return checkColor !== 0 ? color === checkColor : color === arr[0];
    },
  },
};
</script>
