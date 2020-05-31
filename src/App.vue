<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
html, body {
  font-family: 'Open Sans', Open+Sans;
}

#app {
  font-family: 'Open Sans', Open+Sans;
}
</style>