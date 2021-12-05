

<template>
  <div>hello</div>
</template>

<script lang="ts">import { defineComponent } from "vue";
import { useDevice } from "./lib/main";

export default defineComponent({
  setup() {
    const d = useDevice()
    console.log(d.android, "in setup");
    console.log(d.windows, "in setup");
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
