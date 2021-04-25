import Vue from 'vue';
import Vuex from 'vuex';

import products from '@/data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      { productId: 1, amount: 1 },
    ],
    amount: 1,
  },
  mutations: {
    updateAmount(state, amount) {
      state.amount = amount;
    },
    incrementAmount(state) {
      state.amount += 1;
    },
    decrementAmount(state) {
      if (state.amount > 1) {
        state.amount -= 1;
      }
    },
    addProductToCart(state, { productId, amount }) {
      const item = state.cartProducts.find((product) => product.productId === productId);
      if (item) {
        item.amount += amount;
      } else {
        state.cartProducts.push({
          productId,
          amount,
        });
      }
    },
    updateCartProductAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((product) => product.productId === productId);

      if (item) {
        item.amount = amount;
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },
  },
  getters: {
    cartProductLength(state) {
      return state.cartProducts.length;
    },
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const obj = {
          ...item,
          product: products.find((p) => p.id === item.productId),
        };
        return obj;
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
  },
});
