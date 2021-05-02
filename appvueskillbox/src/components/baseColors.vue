<template>
  <ul class="colors">
    <li
      class="colors__item"
      v-for="color in colors"
      :key="color.id"
    >
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          :value="color.id"
          v-model.number="currentColorsId"
        >
        <span
          class="colors__value"
          :style="{ backgroundColor: color.code }"
        >
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      currentColorsId: this.colorsId,
    };
  },
  props: {
    colors: Array,
    colorsId: Number,
  },
  watch: {
    currentColorsId(value) {
      this.$emit('update:colorsId', value);
    },
  },
};
</script>
