import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      titleClass: "",
    };
  },
  mutations: {
    changeColor(state, payload) {
      state.titleClass = payload;
    },
  },
  getters: {
    getColor(state) {
      return state.titleClass;
    },
  },
});

export default store;
