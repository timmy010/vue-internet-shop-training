<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <productFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :colors-id.sync="filterColorsId"
      />

      <section class="catalog">
        <baseLoader v-if="productsLoading" text="Секунду, загружаем товары..."/>
        <baseErrorLoad v-if="productsLoadingFailed" @loadSmth="this.loadProducts"/>

        <productList
          :products="products"
        />
        <basePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
      </section>

    </div>
  </main>
</template>

<script>
import productFilter from '@/components/productFilter.vue';
import productList from '@/components/productList.vue';
import basePagination from '@/components/basePagination.vue';
import baseLoader from '@/components/baseLoader.vue';
import baseErrorLoad from '@/components/baseErrorLoad.vue';
import axios from 'axios';
import API_BASE_URL from '@/config';

export default {
  components: {
    productFilter, productList, basePagination, baseLoader, baseErrorLoad,
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      productColorsId: 1,

      page: 1,
      productsPerPage: 6,

      productsData: null,

      productsLoading: false,
      productsLoadingFailed: false,
    };
  },
  computed: {
    filterColorsId() {
      return this.$store.state.filterColorsId;
    },
    products() {
      return this.productsData
        ? this.productsData.items.map((product) => ({
          ...product,
          image: product.image.file.url,
        }))
        : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  methods: {
    loadProducts() {
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: this.page,
            limit: this.productsPerPage,
            categoryId: this.filterCategoryId,
            colorId: this.filterColorsId,
            minPrice: this.filterPriceFrom,
            maxPrice: this.filterPriceTo,
          },
        })
          .then((response) => {
            this.productsData = response.data;
          })
          .catch(() => { this.productsLoadingFailed = true; })
          .then(() => { this.productsLoading = false; });
      }, 0);
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterColorsId() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
