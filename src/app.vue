<template>
  <HCButton :title="'Hello world!'" :color="'#FFFFFF'" :bgcolor="'#000000'" class="general-btn" @click="test" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HCButton from './HCButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    HCButton,
  },
  methods: {
    test() {
      console.log('HCButton was clicked!');
    },
  },
});
</script>
