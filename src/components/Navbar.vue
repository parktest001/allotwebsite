<template>
  <div style="height:10px">
    <el-button class="menuButton">JOIN AS VENDOR</el-button>
   <img class="imageDiv" src="../assets/Logo.svg"/>

      <el-menu
  :default-active="activeIndex2"
  class="el-menu"
  mode="horizontal"
  @select="handleSelect"
  background-color="#fcfcfc"
  text-color="#3400C5"
  active-text-color="#3400C5"

  
  >
  <el-menu-item index="1" class="menuItem">FEATURES</el-menu-item>
 
  <el-menu-item index="2" class="menuItem">DOWNLOAD</el-menu-item>
</el-menu></div>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      window.app=this
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "login"
          });
          window.app.$message('Logged out successfully');
        });
    },
    goBack() {
      window.history.back();
    },
    handleAbout()
    {
          this.$message('Development Stage');
    },
    loginpage()
    {
        this.$router.push('/login')
    },
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
html, body {
  font-family: 'Open Sans', Open+Sans;
}

#app {
  font-family: 'Open Sans', Open+Sans;
}
@media (min-width: 1281px) {
.el-menu
{
  float:right;
  border: none;
  border-bottom: 0 none !important;
  box-shadow: none;
}
.menuItem
{

  font-size:1.563vw;
  font-weight: 100;
}
.menuButton
{
  font-size:0.938vw;
  margin-top: 0.75vw;
  margin-right: 7.5vw;
  margin-left: 2.6vw;
  float:right;
  width: 11.667vw;
  color:#ffffff;
  background-color: #3400C5;
}
.imageDiv
{
  float: left;
  width: 10vw;
  height: 5.9259vh;
  margin-left: 7.5vw;
}
}
@media (min-width: 320px) and (max-width: 480px) {
  .el-menu
{
  float:right;
  border: none;
  border-bottom: 0 none !important;
  box-shadow: none;
}
.menuItem
{

  font-size:1.563vw;
  font-weight: 100;
}
.menuButton
{
  font-size:0.938vw;
  margin-top: 1.75vh;
  margin-right: 7.5vw;
  margin-left: 0.6vw;
  float:right;
  width: 16.667vw;
  color:#ffffff;
  background-color: #3400C5;
}
.imageDiv
{
  margin-top: 0.75vh;
  float: left;
  width: 10vw;
  height: 5.9259vh;
  margin-left: 7.5vw;
}
}
</style>