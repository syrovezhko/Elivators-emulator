<template>
  <div class="gondola gondola-position">
  </div> 
</template>

<script>
  export default {
    name: 'Gondola',
  }
</script>

<style scoped>
  .gondola {
    display: block;
    width: 100%;
    height: 100px;
    background: cyan;
    position: relative;
  }
  .gondola-position {
    top: 400px;
  }
  .gondola-opacity {
    opacity: 0.1;
  }
  .screen {
    display: block;
    margin-left: 25px;
    width: 25px;
    height: 18px;
    padding: 2px;
    margin-top: 10px;
    border-radius: 4px;
    font-size: 10px;
    text-align: center;
    background: DarkCyan;
    color: white;
  }
</style>