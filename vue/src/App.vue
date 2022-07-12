<template>
  <div id="app">
    <house></house>
  </div>
</template>

<script>
import House from './components/House.vue'
export default {
  name: 'app',
  components:{ House }
}

</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
