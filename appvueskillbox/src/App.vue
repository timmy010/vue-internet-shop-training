<template>
  <component
    :is="currentPageComponent"
    :page-params="currentPageParams"
    @gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"
  />
</template>

<script>
import MainPage from '@/views/MainPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  name: 'app',
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    },
  },
  components: { MainPage, ProductPage, NotFoundPage },
};
</script>
