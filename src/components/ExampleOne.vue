<template>
  <div class="bar-class">
    {{ bar }}
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
import { IModuleState } from '@/store/modules/module1/types';

export default defineComponent({
  computed: {
    ...mapState<IModuleState>({
      bar: (state: IModuleState) => state.bar,
    }),
  },
  methods: {
    getBar(): boolean {
      return this.bar;
    },
  },
});
</script>