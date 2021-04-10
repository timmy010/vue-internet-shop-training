<template>
<section class="catalog">

  <productList :products="products"/>
  <basePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>

</section>
</template>

<script>
import productList from './components/productList.vue';
import basePagination from './components/basePagination.vue';
import products from './data/products';

export default {
  components: { productList, basePagination },
  name: 'App',
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
