<template>
  <div style="padding-top:40px">
    <center>
      <div v-if="user.loggedIn"><h1>Already Logged in</h1>
      <el-button @click="enterApp()" style="width:300px;height:50px;border:2px solid #5A487A"><span style="font-size:20px;">Enter Application</span></el-button>
      </div>
     <div v-else><h3> <p class="pa">Login to Explore Photographs</p></h3>
<p class="pa">Click pictures to satisfy you not to satisfy others <span class="blink">|</span></p> <br><br>
    
    <img src="../assets/google-logo.png" style="width:50px;height:50px;border:2px solid #5A487A;" /><br><br>
        <el-button @click="submit()" style="height:55px;width:300px" type="primary" plain><div style="font-size:20px">Sign in with Google</div></el-button>
     </div>
    </center>
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
  mounted()
  {
    this.check()
    // if(this.user.loggedIn)
    // {
    //   this.$router.push('/dashboard')
    // }
  },
  methods: {

 
    submit() {
      window.app = this
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        window.app.$router.push('/Dashboard')
        window.app.$message({
          message: 'Logged In Successfully',
          type: 'success'
        });
      })
},
      check()
      {
        if(this.user.loggedIn)
          {
        
          }
      // if(this.user.loggedIn)
      //     {
      //       window.app=this
      //       firebase
      //         .auth()
      //         .signOut()
      //         .then(() => {
                
      //           //window.app.$message('Logged out successfully');
      //         });
      //     }
      },
      enterApp()
      {
          this.$router.push('/dashboard')
      },

    },
};


</script>
<style>
body{
  background: #000;
  padding-top: 10px;
} 

.pa{
  color: black; 
  font-family: "Courier";
  font-size: 20px;
  margin: 10px 0 0 10px;
  white-space: nowrap;
  overflow: hidden;
  width: 30em;
  animation: type 4s steps(60, end); 
}

.pa:nth-child(2){
  animation: type2 8s steps(60, end);
}

.pa a{
  color: black;
  text-decoration: none;
}

.blink{
  animation: blink 3s infinite;
}

@keyframes type{ 
  from { width: 0; } 
} 

@keyframes type2{
  0%{width: 0;}
  50%{width: 0;}
  100%{ width: 100; } 
} 

@keyframes blink{
  to{opacity: .0;}
}

::selection{
  background: black;
}
</style>