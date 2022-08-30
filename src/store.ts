import { createStore, Store } from "vuex";

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
    changeColor(state, payload: string) {
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

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}

export default store;
