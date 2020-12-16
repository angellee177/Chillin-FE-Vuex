<template>
  <div id="app">
    <Navbar />  
    <div class="container">
        <Images />
    </div>
  </div>
</template>

<script>
import Images    from './components/Images';
import Navbar    from './components/Navbar';

export default {
  name: 'App',
  components: {
    Images,
    Navbar
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #ffffff
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow:auto;
  padding: 0 2 rem;
}
</style>
