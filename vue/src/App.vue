<template>
  <div id="app">
    <house></house>
  </div>
</template>

<script>
import House from './components/House.vue'
// import {listener} from './scripts/listener.js'
export default {
  name: 'app',
  components:{House},
  data () {
      console.log("Hello World");
      // listener()
  }
}

</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
