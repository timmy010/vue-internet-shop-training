<template>
  <div class="error-loader">
    <p class="error-loader__text">Произошла ошибка при загрузке</p>
    <button class="error-loader__button" @click="$emit('loadSmth')">Попробовать еще раз</button>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  $darkColor: #272727;
  $lightColor: white;
  .error-loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 40px 0;
    &__text {
      font-size: 1.5em;
      font-weight: 400;
    }
    &__button {
      background-color: $darkColor;
      color: $lightColor;
      font: inherit;
      width: 40%;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s;
    }
    &__button:hover {
      background-color: $lightColor;
      color: $darkColor;
      border: 1px solid $darkColor;
    }
  }
</style>
