import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      titleClass: "red green big boss",
      isTrafficBroken: true,
    };
  },
  mutations: {
    changeColor(state, payload) {
      if (payload) {
        state.isTrafficBroken = false;
        state.titleClass = payload;
      } else {
        console.log("broken");
        store.commit("brokenTraffic");
      }
    },
    brokenTraffic(state) {
      state.isTrafficBroken = true;
      state.titleClass = "";
    },
  },
  getters: {
    getColor(state) {
      return state.titleClass;
    },
    getBrokenTraffic(state) {
      return state.isTrafficBroken;
    },
  },
});

export default store;
