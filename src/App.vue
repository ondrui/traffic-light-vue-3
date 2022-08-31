<template>
  <div>
    <div>
      <button @click="addTrafficlight" class="m-2 btn btn-success">
        Добавить светофор
      </button>
      <button @click="removeTrafficlight" class="m-2 btn btn-danger">
        Удалить светофор
      </button>
    </div>
    <div v-for="item in $store.getters.getTraffics" :key="item">
      <TrafficLight :id="item" :sideClasses="sideClasses" />
    </div>
  </div>
</template>

<script lang="ts">
import io from "socket.io-client";
import { defineComponent } from "vue";
import TrafficLight from "./components/TrafficLight.vue";
import handlerColor from "./handlers/handlerColor";

export default defineComponent({
  name: "App",
  components: {
    TrafficLight,
  },
  data() {
    return {
      socket: io("localhost:3000"),
      sideClasses: "bad dad",
      trafficlight: 0,
    };
  },
  // watch: {
  //   trafficlight(newValue) {
  //     this.$store.getters.getTraffics;
  //   },
  //},
  methods: {
    handler() {
      if (this.$store.getters.getColor) {
        return handlerColor(this.$store.getters.getColor);
      } else {
        console.log("bad!");
        return {
          sum: 0,
          uniqArrBadClasses: "",
        };
      }
    },
    addTrafficlight() {
      this.$store.commit("addTrafficlight");
    },
    removeTrafficlight() {
      this.$store.commit("removeTrafficlight");
    },
    changeColor() {
      console.log("changeColor");
      this.socket.connect();
      this.socket.on("connect", () => {
        console.log("connection ok");
        this.socket.on("message", (data: string) => {
          if (data === "get color") {
            this.socket.emit("message", this.handler()["sum"]);
            this.sideClasses = this.handler()["uniqArrBadClasses"];
          } else {
            this.$store.commit("changeColor", data);
          }
        });
      });
      // if (!this.$store.getters.getTraffics.length) {
      //   this.socket.close();
      // }
    },
  },
  mounted() {
    console.log(`mounted App`);
    if (!this.$store.getters.getTraffics.length) {
      this.socket.disconnect();
    } else {
      this.changeColor();
    }
  },
  updated() {
    console.log(`updated App`);
    if (!this.$store.getters.getTraffics.length) {
      this.socket.disconnect();
    } else {
      this.changeColor();
    }
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}
/* button {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
} */
</style>
