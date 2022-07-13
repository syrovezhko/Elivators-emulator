<template>
  <div class="house">
    <flor v-for = "num in numbers" :number = 'num'/>
    <lift-shaft></lift-shaft>
  </div>
</template>

<script>
import Flor from './Flor.vue'
// import listener from './../scripts/listener';
import LiftShaft from './LiftShaft.vue'
  export default {
    name: 'house',
  components:{ Flor, LiftShaft },
  data (){
    return {
      numbers: Array.from({length: 5}, (_, i) => i + 1).reverse()
    }
  }
  }
</script>

<style scoped>
  .house {
    display: block;
    width: 100%;
    margin: 8px;
    border: solid DarkGray;
    border-width: 0px 0px 1px 0px;
    position: relative;
  }
</style>