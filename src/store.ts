import { createStore } from "vuex";

interface RootState {
  titleClass: string;
  isTrafficBroken: boolean;
}

const store = createStore<RootState>({
  state() {
    return {
      titleClass: "yellow",
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
