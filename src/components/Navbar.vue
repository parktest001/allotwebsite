<template>
  <div style="margin-top:8vh; margin-right: 1vw;" class="mainNav">
   
    <!-- <el-popover
  placement="right"
  width="400"
  trigger="click">
  
  <el-form ref="ruleForm" model="ruleForm" rules="rules" label-width="120px">
  
  <el-form-item label="Owner Name">
    <el-input v-model="ruleForm.name" ></el-input>
  </el-form-item>
  
  <el-form-item label="Phone Number">
    <el-input v-model="ruleForm.number"></el-input>
  </el-form-item>
  <el-form-item label="Parking Lot Name">
    <el-input v-model="ruleForm.lotname"></el-input>
  </el-form-item>
  <el-form-item label="Address">
    <el-input v-model="ruleForm.address"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm()">Join</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>

  </el-form>
  
</el-popover> -->
<el-button class="menuButton" @click="pushPage" style="background-color:#3400c5;color:#ffffff">JOIN AS VENDOR</el-button>
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
  <el-menu-item index="1" class="menuItem" @click="nav">FEATURES</el-menu-item>
 
  <el-menu-item index="2" class="menuItem">DOWNLOAD</el-menu-item>
</el-menu></div>
</template>
<script>
//import { mapGetters } from "vuex"; 
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import firebase from "firebase/app";


Vue.use(Vuelidate)
export default {
 data() {
   /*var checkName = (rule, value, callback) => {
     if(!value){
       return callback(new Error('Please input the age'));
     }
   }*/
      return {
        ruleForm: {
          name: '',
          number: '',
          lotname: '',
          address: ''
          
        
    },
    validations: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ]
    }
};
},
    // mounted: {
    //     db.collection("employees")
    //       .add({ date: date, name: name })
    //       .then(() => {
    //         console.log("Document successfully written!");
    //       })
    //       .catch((error) => {
    //         console.error("Error writing document: ", error);
    //       });
    // },
    methods: {
      
      submitForm() {
        console.log("CALLED HERE")
        firebase.database().ref(this.ruleForm.number).set(
        {
          name: this.ruleForm.name,
          number: this.ruleForm.number,
          lotname: this.ruleForm.lotname,
          address: this.ruleForm.address
        }
        );
    
    },
    pushPage()
    {
      this.$router.push('/vendor');
    },
    nav()
    {
      location.href = "#section1";
    }
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
  .mainNav
  {
    
  }
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
  margin-top: 1vw;
  margin-left: 7vw;
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
@media (min-width: 1025px) and (max-width: 1280px) {
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

@media (min-width: 768px) and (max-width: 1024px) {
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


@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  
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
  margin-top: 1.75vw;
  margin-right: 7.5vw;
  margin-left: 2.6vw;
  float:right;
  width: 11.667vw;
  color:#ffffff;
  background-color: #3400C5;
}
.imageDiv
{
  margin-top: 2.75vw;
  float: left;
  width: 10vw;
  height: 5.9259vh;
  margin-left: 7.5vw;
}
}


@media (min-width: 481px) and (max-width: 767px) {
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
  margin-top: 1.75vw;
  margin-right: 7.5vw;
  margin-left: 1.6vw;
  float:right;
  color:#ffffff;
  background-color: #3400C5;
}
.imageDiv
{
  margin-top: 2.75vw;
  float: left;
  width: 10vw;
  height: 5.9259vh;
  margin-left: 7.5vw;
}
  
}

</style>