import { createStore, Store } from "vuex";

interface RootState {
  titleClass: string;
  isTrafficBroken: boolean;
  amount: number;
  trafficlight: string[];
}

const store = createStore<RootState>({
  state() {
    return {
      titleClass: "yellow",
      isTrafficBroken: true,
      amount: 1,
      trafficlight: [],
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
    addTrafficlight(state) {
      state.trafficlight.push(`trafficlight_${state.amount++}`);
    },
    removeTrafficlight(state, payload) {
      state.trafficlight.splice(state.trafficlight.indexOf(payload), 1);
    },
  },
  getters: {
    getColor(state) {
      return state.titleClass;
    },
    getBrokenTraffic(state) {
      return state.isTrafficBroken;
    },
    getAmount(state) {
      return state.amount;
    },
    getTraffics(state) {
      return state.trafficlight;
    },
  },
});

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}

export default store;
