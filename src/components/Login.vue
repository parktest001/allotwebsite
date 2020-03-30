<template>
  <div>
    <div>Login</div>
        <el-button @click="submit()" type="primary" plain>Sign in with Google</el-button>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  
  data() {
    return {
        mobnum: "null",
        otp: "",
        text: null,
        result:null,
    };
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {

 
    submit() {
      window.app = this
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token)
        window.app.$router.push('/Dashboard')
        window.app.$message('Logged in successfully');
      })
},

    },
};
</script>