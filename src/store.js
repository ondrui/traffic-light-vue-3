import { createStore } from "vuex";
import handlerColor from "./handlers/handlerColor";

const store = createStore({
  state() {
    return {
      titleClass: "red green big boss",
      isTrafficBroken: true,
    };
  },
  mutations: {
    changeColor(state, payload) {
      if (handlerColor(payload)) {
        state.isTrafficBroken = false;
        state.titleClass = handlerColor(payload);
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
