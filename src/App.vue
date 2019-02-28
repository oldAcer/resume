<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
    import foot from '@/components/foot'
export default {
  name: 'App',
  components:{
    foot,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
