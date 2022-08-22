<template>
  <div>
    <div class="div-alert">
      <div v-show="isTrafficBroken" class="alert alert-danger" role="alert">
        Светофор сломан!
      </div>
    </div>

    <div id="trafficlight" v-bind:class="titleClass">
      <div title="Красный"></div>
      <div title="Жёлтый"></div>
      <div title="Зеленый"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleClass: String,
    isTrafficBroken: Boolean,
  },
};
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
