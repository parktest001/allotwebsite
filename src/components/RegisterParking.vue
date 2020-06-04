<template>
<div style="margin-top:20px">
<el-form  ref="form" :model="form" label-width="160px">
  <el-form-item  label="Parking Display Name">
    <el-input class="formElement" placeholder="Star Complex Parking" v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item class="formElement" label="Address">
    <el-input class="formElement" placeholder="50, Mount Road, Royapet, Chennai" v-model="form.address"></el-input>
  </el-form-item>
 <el-form-item label="Lattitude">
    <el-input class="formElement" type="text" step="any" placeholder="13.032245"  v-model="form.lat"></el-input>
  </el-form-item>
   <el-form-item label="Longitude">
    <el-input class="formElement" type="text" step="any" placeholder="80.131568"  v-model="form.lon"></el-input>
  </el-form-item>
<el-form-item label="Car Capacity">
    <el-input class="formElement" type="text" step="any" placeholder="eg. 10"  v-model="form.carcap"></el-input>
  </el-form-item>
   <el-form-item label="Car Price / hr">
    <el-input class="formElement" type="text" step="any" placeholder="eg. 50"  v-model="form.carprice"></el-input>
  </el-form-item>
<el-form-item label="Bike Capacity">
    <el-input class="formElement" type="text" step="any" placeholder="eg. 20"  v-model="form.bikecap"></el-input>
  </el-form-item>
   <el-form-item label="Bike Price / hr">
    <el-input class="formElement" type="text" step="any" placeholder="eg. 40"  v-model="form.bikeprice"></el-input>
  </el-form-item>
<el-form-item label="Username">
    <el-input class="formElement" type="text" step="any" placeholder="StarComp@11mount"  v-model="form.user"></el-input>
  </el-form-item>
   <el-form-item label="Password">
    <el-input class="formElement" type="text" step="any" placeholder="Test@StarPassword!@#"  v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item label="Features Count">
    <el-input-number class="formElement"  placeholder="1"  v-model="form.featureCnt"></el-input-number>
      </el-form-item>
      <el-form-item v-for="n in form.featureCnt" v-bind:key="n" label="Feature">
       {{n-1}}
    <el-input class="formElement" type="text" step="any" placeholder="CC TV"  v-model="form.features[n-1]"></el-input>
      </el-form-item>
    <el-button @click="submit">Register User</el-button>




</el-form></div>
</template>
<script>

import { mapGetters } from "vuex";
import firebase from "firebase";
import { encode } from "base-64";
import axios from 'axios'
import VueAxios from 'vue-axios'
 
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
export default {
  
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
 data() {
      return {
        form: {
          name: '',
          address: '',
          lat: '',
          lon: '',
          carcap: '',
          carprice:'',
          bikecap: '',
          bikeprice: '',
          user: '',
          pass: '',
          featureCnt: 0,
          features : [],
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      submit()
      {
        axios.post("http://147.139.37.111:8080/ChannelCreation/rest/user/logIn", {
            withCredentials: true,
            headers: {
              "Accept": "text/plain",
              "Content-Type": "application/json"
            }
          },{
            auth: {
              username: "admin",
              password: "admin"
          }}).then(function(response) {
            console.log('Authenticated');
          }).catch(function(error) {
            console.log('Error on Authentication');
          });





  //       let headers = new Headers();
  //       let encoded = window.btoa("admin:admin");
  //       headers.append('Authorization', 'Basic ' + encoded);
  //       const requestOptions = {
  //   method: "POST",
  //   headers: headers,
  //   credential:'same-origin',
  //   body: JSON.encode({
  //   "mobile":"9500164001",
  //   "passWord":"Test@54321"
  //   })
  // };
  //  fetch("http://147.139.37.111:8080/ChannelCreation/rest/user/logIn", requestOptions)
  //   .then(response => response.json())
  //   .then(data => (this.postId = data.id));
      }
    }
};

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Manrope');
html, body {
  font-family: 'Open Sans', Open+Sans;

}

#app {
  font-family: 'Open Sans', Open+Sans;
}
.formElement
{
    width:50vw
}
</style>