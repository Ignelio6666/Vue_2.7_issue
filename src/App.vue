<template>
  <div id="app">
    <ExampleOne />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ExampleOne from './components/ExampleOne.vue';

export default defineComponent({
  components: {
    ExampleOne,
  },
});
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
