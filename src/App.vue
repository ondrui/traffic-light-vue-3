<template>
  <TrafficLight :titleClass="titleClass" />
</template>

<script>
import io from "socket.io-client";
import TrafficLight from "./components/TrafficLight.vue";

export default {
  name: "App",
  components: {
    TrafficLight,
  },
  data() {
    return {
      socket: io("localhost:3000"),
      titleClass: "",
    };
  },
  methods: {
    changeColor() {
      this.socket.on("connect", () => {
        this.socket.on("message", (data) => {
          if (data === "get color") {
            this.socket.emit("message", this.titleClass);
          } else {
            this.titleClass = data;
          }
        });
      });
    },
  },
  mounted() {
    this.changeColor();
  },
};
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
  justify-content: center;
}
</style>
