<template>
  <div>
    <main class="py-4">
      <router-view></router-view>
    </main>
    <div id="app">
    <ChatBox msg="Welcome to Your Vue.js App"/>
  </div>
  </div>
  
</template>
<script>
import navbar from "./components/Navbar";
import ChatBox from './components/ChatBox.vue'

export default {
  name: 'app',
  components: {
    ChatBox
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>