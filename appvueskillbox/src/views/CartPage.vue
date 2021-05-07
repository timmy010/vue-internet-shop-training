<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Корзина
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        {{ this.cartProductLength }} товара
      </span>
    </div>

    <section class="cart">
      <baseLoader v-if="this.$store.state.isCartLoading" text="Секунду, загружаем Вашу корзину"/>
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <cartItem
              v-for="item in products"
              :key="item.product.id"
              :item="item"
            />
          </ul>
        </div>

        <div class="cart__block" v-if="!this.$store.state.isCartLoading">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ totalPrice | numberFormat }} ₽</span>
          </p>

          <router-link
            tag="button"
            :to="{ name: 'order' }"
            class="cart__button button button--primery"
            type="submit"
            v-if="cartProductLength"
          >
            Оформить заказ
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import cartItem from '@/components/cartItem.vue';
import baseLoader from '@/components/baseLoader.vue';
import { mapGetters } from 'vuex';

export default {
  components: { cartItem, baseLoader },
  filters: {
    numberFormat,
  },
  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalPrice: 'cartTotalPrice',
      cartProductLength: 'cartProductLength',
    }),
  },
};
</script>

<style>
  .container[data-v-fa08e358] {
    width: unset;
    margin-left: auto;
    margin-right: auto;
  }
</style>
