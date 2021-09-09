export default {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getProducts');
  },

  async getProducts ({ $axios }) {
    const data = await this.$axios.$get('products');
    console.log(data);
    return { products: data };
  }
};
