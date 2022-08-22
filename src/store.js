import { createStore } from "vuex";
import handlerColor from "../handlerColor";

const store = createStore({
  state() {
    return {
      titleClass: "red big boss",
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
