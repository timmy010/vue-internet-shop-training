import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import API_BASE_URL from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    amount: 1,
    filterColorsId: 0,

    userAccessKey: null,
    cartProductsData: null,

    isCartLoading: false,
  },
  mutations: {
    updateCartLoading(state, value) {
      state.isCartLoading = value;
    },
    updateFilterColorId(state, colorId) {
      state.filterColorsId = colorId;
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
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.cartProductsData = items;
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((item) => {
        const obj = {
          productId: item.product.id,
          amount: item.quantity,
        };
        return obj;
      });
    },
  },
  getters: {
    cartProductLength(state) {
      return state.cartProducts.length;
    },
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const { product } = state.cartProductsData.find((p) => p.product.id === item.productId);
        const obj = {
          ...item,
          product: {
            ...product,
            image: product.image.file.url,
          },
        };
        return obj;
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
  },
  actions: {
    loadCart(context) {
      context.commit('updateCartLoading', true);

      return (new Promise((resolve) => setTimeout(resolve, 3000)))
        .then(() => {
          axios.get(`${API_BASE_URL}/api/baskets`, {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          })
            .then((response) => {
              if (!context.state.userAccessKey) {
                localStorage.setItem('userAccessKey', response.data.user.accessKey);
                context.commit('updateUserAccessKey', response.data.user.accessKey);
              }
              context.commit('updateCartProductsData', response.data.items);
              context.commit('syncCartProducts');
            })
            .then(() => context.commit('updateCartLoading', false));
        });
    },
    // loadCart(context) {
    //   context.commit('updateCartLoading', true);
    //   return axios.get(`${API_BASE_URL}/api/baskets`, {
    //     params: {
    //       userAccessKey: context.state.userAccessKey,
    //     },
    //   })
    //     .then((response) => {
    //       if (!context.state.userAccessKey) {
    //         localStorage.setItem('userAccessKey', response.data.user.accessKey);
    //         context.commit('updateUserAccessKey', response.data.user.accessKey);
    //       }
    //       context.commit('updateCartProductsData', response.data.items);
    //       context.commit('syncCartProducts');
    //     })
    //     .then(() => context.commit('updateCartLoading', false));
    // },
    addProductToCart(context, { productId, amount }) {
      return (new Promise((resolve) => setTimeout(resolve, 3000)))
        .then(() => {
          axios.post(`${API_BASE_URL}/api/baskets/products`, {
            productId,
            quantity: amount,
          }, {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          })
            .then((response) => {
              context.commit('updateCartProductsData', response.data.items);
              context.commit('syncCartProducts');
            });
        });
    },
    // addProductToCart(context, { productId, amount }) {
    //   return axios.post(`${API_BASE_URL}/api/baskets/products`, {
    //     productId,
    //     quantity: amount,
    //   }, {
    //     params: {
    //       userAccessKey: context.state.userAccessKey,
    //     },
    //   })
    //     .then((response) => {
    //       context.commit('updateCartProductsData', response.data.items);
    //       context.commit('syncCartProducts');
    //     });
    // },
    updateCartProductAmount(context, { productId, amount }) {
      context.commit('updateCartProductAmount', { productId, amount });

      if (amount < 1) {
        return false;
      }

      return axios.put(`${API_BASE_URL}/api/baskets/products`, {
        productId,
        quantity: amount,
      }, {
        params: {
          userAccessKey: context.state.userAccessKey,
        },
      })
        .then((response) => {
          context.commit('updateCartProductsData', response.data.items);
        })
        .catch(() => context.commit('syncCartProducts'));
    },
  },
});
