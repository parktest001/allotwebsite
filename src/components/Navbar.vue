<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel" style="background-color: #B9ABD3;border: 2px solid #5A487A">
    <div class="container" style="height:80px;">
      
      <router-link to="/login" class="navbar-brand" style="padding-left:20px;"><img src="../assets/home.png" style="width:30px;height:30px;padding-top:20px" /></router-link>
   
                      <div style="float:right;padding-right:20px;padding-top:20px;"><el-button style="border:2px solid #5A487A" v-if="user.loggedIn" class="nav-link" @click.prevent="signOut" >Sign out</el-button></div>

            <div v-if="user.loggedIn" class="nav-item" style="float:right;padding-right:20px;padding-top:30px">Hi! {{user.data.displayName}}</div>
          
      <span @click="goBack()" style="float:right;padding-right:20px;padding-top:5px;cursor: pointer;"><h2>Back</h2></span>
        
    
        
    </div>
  </nav>
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
    }
  }
};
</script>