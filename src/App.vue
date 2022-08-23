<template>
  <TrafficLight />
</template>

<script>
import TrafficLight from "./components/TrafficLight.vue";

export default {
  name: "App",
  components: {
    TrafficLight,
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
