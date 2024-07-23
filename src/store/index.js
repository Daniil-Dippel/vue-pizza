import { createStore } from 'vuex'


let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart?.length) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}
export default createStore({
  state: {
    totalPrice: JSON.parse(localStorage.getItem('cart')).reduce((a,b) => a +(b.price * b.counter), 0),
    totalCount: JSON.parse(localStorage.getItem('cart')).reduce((a,b) => a + b.counter, 0),
  },
  getters: {
  },
  mutations: {
    TOTAL_COUNT_PRICE: (state, payload) => {
      state.totalCount = payload.reduce((a,b) => a + b.counter, 0);
      state.totalPrice = payload.reduce((a,b) => a+(b.price * b.counter), 0);
    },
  },
  actions: {
  },
  modules: {
  }
})
