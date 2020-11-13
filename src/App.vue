<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  #app {
    background-color: #f8f9fd;
    color: #2a2d3b !important;
    font-family: 'Roboto';
    font-weight: normal !important;
    font-stretch: normal !important;
    font-style: normal !important;
    line-height: normal !important;
    letter-spacing: normal !important;
  }

  img {
    display: block;
  }
  
  input:focus, button:focus { 
    outline: none;
  }

  .v-dialog {
    overflow-y: initial !important;
  }
</style>
