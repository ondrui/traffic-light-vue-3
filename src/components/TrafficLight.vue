<template>
  <div>
    <div class="div-alert">
      <div v-show="setBrokenTraffic" class="alert alert-danger" role="alert">
        Светофор сломан!
      </div>
    </div>
    <div :id="id" :class="setColor" class="trafficlight">
      <div title="Красный"></div>
      <div title="Жёлтый"></div>
      <div title="Зеленый"></div>
    </div>
    <div>
      <button @click="remove" class="btn btn-info">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: String,
    sideClasses: String,
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
    getClasses() {
      let trafficlight = document.querySelector(`#${this.id}`);

      if (trafficlight) {
        const classesList = trafficlight.className;
        this.$store.commit("changeColor", classesList);
      } else {
        return console.log("элемент не найден!");
      }
    },
    remove() {
      this.$store.commit("removeTrafficlight", this.id);
    },
  },
  mounted() {
    console.log(`mounted ${this.id}`);
    this.getClasses();
  },
  unmounted() {
    console.log(`unmounted ${this.id}`);
  },
});
</script>

<style>
.trafficlight div:nth-child(1),
.trafficlight div:nth-child(2),
.trafficlight div:nth-child(3) {
  box-sizing: border-box;
  border: 3px solid black;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px auto;
  background-color: grey;
}

.trafficlight div:nth-child(2) {
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

.trafficlight {
  box-sizing: border-box;
  border: 3px solid black;
  padding: 10px 15px;
  width: 120px;
  margin: 0 auto;
}

.red.trafficlight div:nth-child(1) {
  background-color: red;
}

.green.trafficlight div:nth-child(3) {
  background-color: green;
}

.red.trafficlight div:nth-child(2),
.green.trafficlight div:nth-child(2) {
  animation: none;
}

.yellow.trafficlight div:nth-child(2) {
  background-color: yellow;
  animation: none;
}

.div-alert {
  height: 58px;
  margin-bottom: 20px;
}
</style>
