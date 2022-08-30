<template>
  <div>
    <div class="div-alert">
      <div v-show="setBrokenTraffic" class="alert alert-danger" role="alert">
        Светофор сломан!
      </div>
    </div>

    <div id="trafficlight" :class="setColor">
      <div title="Красный"></div>
      <div title="Жёлтый"></div>
      <div title="Зеленый"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import io from "socket.io-client";
import handlerColor from "../handlers/handlerColor";

export default defineComponent({
  data() {
    return {
      socket: io("localhost:3000"),
      sideClasses: "bad dad",
    };
  },
  computed: {
    setColor(): string {
      return `${this.$store.getters.getColor} ${this.sideClasses}`;
    },
    setBrokenTraffic() {
      return this.$store.getters.getBrokenTraffic;
    },
  },
  methods: {
    handler() {
      let trafficlight = document.querySelector("#trafficlight")!.className;

      return handlerColor(trafficlight);
    },
    changeColor() {
      this.socket.on("connect", () => {
        console.log("connection ok");
        this.socket.on("message", (data) => {
          if (data === "get color") {
            this.socket.emit("message", this.handler()["sum"]);
            this.sideClasses = this.handler()["uniqArrBadClasses"];
          } else {
            this.$store.commit("changeColor", data);
          }
        });

        // this.socket.on("connect_error", (err) => {
        //   console.log(`event: connect_error | reason: ${err.message}`);
        // });

        // this.socket.on("disconnect", (reason) => {
        //   console.log("Disconnected");
        //   console.log(`event: disconnect | reason: ${reason}`);
        // });
      });
    },
  },
  mounted() {
    console.log("mounted");
    this.changeColor();
  },
});
</script>

<style>
#trafficlight div:nth-child(1),
#trafficlight div:nth-child(2),
#trafficlight div:nth-child(3) {
  box-sizing: border-box;
  border: 3px solid black;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px auto;
  background-color: grey;
}

#trafficlight div:nth-child(2) {
  animation: сolorBlink 1s infinite alternate;
}

@keyframes сolorBlink {
  0% {
    background: grey;
  }

  100% {
    background: yellow;
  }
}

#trafficlight {
  box-sizing: border-box;
  border: 3px solid black;
  padding: 10px 15px;
  width: 120px;
  margin: 0 auto;
}

.red#trafficlight div:nth-child(1) {
  background-color: red;
}

.green#trafficlight div:nth-child(3) {
  background-color: green;
}

.red#trafficlight div:nth-child(2),
.green#trafficlight div:nth-child(2) {
  animation: none;
}

.yellow#trafficlight div:nth-child(2) {
  background-color: yellow;
  animation: none;
}

.div-alert {
  height: 58px;
  margin-bottom: 20px;
}
</style>
