<script lang="ts">
import Vue from 'vue';
import { CalenvueSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CalenvueSample,
  }
});
</script>

<template>
  <div id="app">
    <calenvue-sample />
  </div>
</template>
