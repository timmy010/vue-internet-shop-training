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
          type="radio" name="color"
          :value="color.id"
          v-model.number="currentColorsId"
        >
        <span
          class="colors__value"
          :style="{ backgroundColor: color.value }"
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
      currentColorsId: 0,
    };
  },
  props: ['colors', 'parentColorsId'],
  watch: {
    currentColorsId(value) {
      this.$emit('update:parentColorsId', value);
    },
    parentColorsId(value) {
      this.currentColorsId = value;
    },
  },
};
</script>
