// <ul class="colors colors--black">
//   <li class="colors__item" v-for="color in product.colorsId" :key="color">
//     <label class="colors__label">
//       <input
//         class="colors__radio sr-only"
//         type="radio"
//         :value="color"
//         :checked="isChecked(color, product.colorsId, checkColor)"
//       >
//       <span
//         class="colors__value"
//         :style="{ backgroundColor: getColorValue(color) }"
//       >
//       </span>
//     </label>
//   </li>
// </ul>

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
        :colors="setProductColors(product.colorsId)"
        :parentCurrentColorsId.sync="currentColorsId"
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
      currentColorsId: 1,
    };
  },
  components: { baseColors },
  props: ['product', 'colorsId'],
  computed: {
    colors() {
      return colors;
    },
  },
  watch: {
    currentColorsId(value) {
      this.$emit('update:colorsId', value);
    },
  },
  methods: {
    setProductColors(changedColors) {
      const goodColors = changedColors.map((colorId) => {
        const obj = {
          id: colorId,
          value: colors[colorId - 1].value,
        };
        return obj;
      });
      return goodColors;
    },
  },
};
</script>
