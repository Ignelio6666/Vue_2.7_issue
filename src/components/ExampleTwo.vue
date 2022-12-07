<template>
  <div class="bar-class">
    {{ getVar() }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      testvar: 500,
    }
  },
  computed: {
    getTestVar(): number {
      return this.testvar;
    }
  },
  methods: {
    getVar(): number {
      return this.getTestVar;
    },
  },
});
</script>