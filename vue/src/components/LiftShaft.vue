<template>
  <div class="liftShaft">
    <Gondola></Gondola>
  </div> 
</template>

<script>
  import Gondola from './Gondola.vue'
  export default {
    name: 'LiftShaft',
  components:{ Gondola }
  }
</script>

<style scoped>
  .liftShaft {
    position: absolute;
    width: 81px;
    height: 100%;
    border: solid DarkGray;
    border-width: 0px 3px 0px 3px;  
    margin-left: 10px;
    top: 0px;
    left: 0px;
  }
</style>