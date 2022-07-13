<template>
  <div class="flor">
    {{number}}
    <div class="button" :id="number">
      <div class="square">
        <div class="ring">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flor',
    props: ['number']
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .flor {
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px 0px 0px 110px;
    border: solid DarkGray;
    border-width: 1px 0px 0px 0px;
    font-weight: bold;
  }
  .button {
    position: relative;
    margin-top: 10px;
    color: red;
  }
  .button:hover {
    opacity: 0.5;
  }
  .button:focus {     
    background: yellow;
  }
  .button-active {
    color: blue;
  }
  .square {
    width: 24px;
    height: 24px;
    border: 1px solid;
    border-radius: 5px;
    padding: 4px;
  }
  .ring {
    width: 14px;
    height: 14px;
    border: 1px solid;
    border-radius: 50%;
    padding: 2px;
    
  }
  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 4px solid;
  }
</style>