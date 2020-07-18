<template >
  
    
  <div class="maindiv">
  <div class="joinBody1">
      
    <div style="float:left;">
    <div class="joinDesc11" style="font-weight:600">Do you have a space <br>that can be used as a parking?</div>
    <div class="joinDesc21">You can partner with us as a vendor and earn money with ease.</div>
    </div>
  </div>
  <!-- <img class="qr" src="../assets/Logo.svg"> -->
      <div class="centerdiv">
          
          <!-- <el-row :gutter="30">
          <el-col :span="500"> -->
           <el-card shadow="hover" class="hovercard">
          
            <div class="usericon"><el-avatar icon="el-icon-user-solid" :size="50" ></el-avatar> </div><br>
            <div class="para">Vendor Request Service</div><br>
            <div class="formdiv">
              
                <el-form ref="ruleForm" model="ruleForm" rules="rules" label-width="120px" class="form">
                  
                  <el-input type="text"  v-model="ruleForm.name" prefix-icon="el-icon-s-custom" placeholder="Owner Name" :rules="ruleinput" ></el-input>
                        <div style="margin: 20px 0;"></div>
                  <el-input v-model="ruleForm.number" prefix-icon="el-icon-phone" placeholder="Contact Number" validate-event=true ></el-input>
                        <div style="margin: 20px 0;"></div>
                  <el-input type="email"  v-model="ruleForm.email" prefix-icon="el-icon-s-promotion" placeholder="Email Id" :rules="ruleinput" ></el-input>
                        <div style="margin: 20px 0;"></div>
                  <el-input v-model="ruleForm.lotname" prefix-icon="el-icon-place" placeholder="Parking Lot name"></el-input>
                        <div style="margin: 20px 0;"></div>
                  <el-input v-model="ruleForm.address" prefix-icon="el-icon-add-location" placeholder="Address"></el-input>
                        <div style="margin: 20px 0;"></div>

                    <el-form-item>
                      <el-button type="primary" icon="el-icon-user" class="buttondiv1" @click="submitForm()" >        Contact Us</el-button>
                      <el-button icon="el-icon-close" class="buttondiv2" @click="resetForm">          Cancel</el-button>
                    </el-form-item>

                </el-form>
            </div>
          </el-card>
        <!-- </el-col>
        </el-row> -->
          
      
      </div>
  </div> 
</template>
<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import firebase, { database } from "firebase/app";


Vue.use(Vuelidate)
const initFromData = { name: '',
            number: '',
            lotname: '',
            address: '',
            email: '', };
export default {
  
 data() {
   
   
      return {
          ruleForm:  Object.assign({}, initFromData),
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
      resetForm() {
        this.ruleForm = Object.assign({}, initFromData);
      },
      submitForm() {
        console.log("CALLED HERE")
        
        
        var theDataToAdd = this.ruleForm.number;
        console.log(this.ruleForm.number);
        var userref = firebase.database().ref(theDataToAdd.toString());
        window.value = this.ruleForm;
        window.current = this;
        userref.once('value').then(function(snapshot) {
            console.log(snapshot);

            if (snapshot.val() != null) {
              
              console.log('exists');
              console.log(snapshot.val());
              window.current.$message.error('Oops, Contact Number Already Exists'); 
            }
            
            else{
              console.log("here")
              firebase.database().ref(window.value.number).set(
              {
                name: window.value.name,
                email: window.value.email,
                lotname: window.value.lotname,
                address: window.value.address,
              }
              );
              console.log('not exists');
              
              window.current.$message.success({
                  message: 'Request Processed Successfully!',
                });
             
            }
            
        });
     
      },
      
    
    
    }
};
</script>
<style>



 /* .maindiv{
  z-index: 0;
  background-color:#ececec;
  background-image: url("../assets/map2.svg");
  width: 100vw;
  height: 100vh;
   display:flex; 
  justify-content: center;
  align-items: center;
}

.centerdiv{
  clear: left;
  z-index: 1;
  display:inline-block;
  position: relative;
 margin-left: 9vw;
  
  background-color: lightblue;
 

}

.el-icon-user-solid{
  size: 100px;
}
.usericon{
  display: flex;
  justify-content: center;
  align-items: center;
}
.para{
  font-family:sans-serif;
  font-weight: 600;
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3400c5;
}
.buttondiv1
{
  margin-top: 60px;
  margin-left: -100px; 
  margin-right: 20px;
  background-color:#3400c5 ;
  float: left;
  width: 10vw;
  font-weight:600 ;
}
.buttondiv2
{
  margin-top: 60px;
  margin-left: -100px; 
  margin-right: 20px;
  float: left;
  width: 10vw;
  background-color:#dfd6f7 ;
  color: black;
    font-weight:600 ;
}
.formdiv{
  width: 25vw;
}
.hovercard{
  width: 27.5vw;
} 
.joinBody1
{
  margin-left: 0.1vw;
  height: 56.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinDesc11
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 14.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc21
{
    margin-top: 3.2407vh;
    height: 7.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
} */

@media (min-width: 1281px){
    .maindiv{
      z-index: 0;
      background-color:#ececec;
      background-image: url("../assets/map2.svg");
      width: 100vw;
      height: 100vh;
      display:flex; 
      justify-content: center;
      align-items: center;
    } 
    .centerdiv{
      clear: left;
      z-index: 1;
      display:inline-block;
      position: relative;
    margin-left: 8vw;
      

    }
    .el-icon-user-solid{
      size: 100px;
    }
    .usericon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .para{
      font-family:sans-serif;
      font-weight: 600;
      font-size: larger;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3400c5;
    }
    .buttondiv1
    {
      margin-top: 5vh;
      margin-left: -7vw; 
      margin-right: 0.5vw;
      background-color:#3400c5 ;
      float: left;
      width: 10.5vw;
      font-weight:600 ;
    }
    .buttondiv2
    {
      margin-top: 5vh;
      margin-left: -3vw; 
      margin-right: 1vw;
      float: left;
      width: 10.5vw;
      background-color:#dfd6f7 ;
      color: black;
        font-weight:600 ;
    }
    .formdiv{
      width: 27vw;
    }
    .hovercard{
      width: 30vw;
    } 
    .joinBody1
    {
      margin-left: -4vw;
      height: 56.2962vh;
      display:inline-block;
      font-size: 4.167vw;
      color: #707070;
    }
    .joinDesc11
    {
        color:#3400c5;
        font-family: 'Manrope', Manrope;
        margin-top: 10vh;
        height: 14.4444vh;
        width: 42.5vw;
        font-size: 2.917vw;
    }
    .joinDesc21
    {
        margin-top: 5vh;
        height: 7.59vh;
        width: 38.750vw;
        font-size: 1.563vw;
        color:#000000
    }
} 

@media (min-width: 320px) and (max-width: 480px) {
    .maindiv{
      z-index: 0;
      background-color:#ececec;
      background-image: url("../assets/map2.svg");
      width: 100vw;
      height: 100vh;
      display:flex; 
      justify-content: center;
      align-items: center;
    } 
    .centerdiv{
      clear:left;
      z-index: 1;
      display:inline-block;
      position: relative;
      margin-left: -30vw;
      margin-top: 15vh;
      background-color: lawngreen;
    }
    .el-icon-user-solid{
      size: 100px;
    }
    .usericon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .para{
      font-family:sans-serif;
      font-weight: 600;
      font-size: larger;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3400c5;
    }
    .buttondiv1
    {
      margin-top: 1vh;
      margin-left: -23vw; 
      margin-right: 2vw;
      background-color:#3400c5 ;
      float: left;
      width: 28.5vw;
      font-weight:600 ;
    }
    .buttondiv2
    {
      margin-top: 1vh;
      margin-left: -40vw; 
      margin-right: 0vw;
      float: left;
      width: 28.5vw;
      background-color:#dfd6f7 ;
      color: black;
        font-weight:600 ;
    }
    .formdiv{
      width: 65vw; 
    }
    .hovercard{
      width: 73vw;
    } 
    .joinBody1
    {
      margin-left: 0.1vw;
      height: 123vh;
      display:inline-block;
      font-size: 4.167vw;
      color: #707070;
    }
    .joinDesc11
    {
        color:#3400c5;
        font-family: 'Manrope', Manrope;
        margin-top: 15vh;
        height: 13vh;
        width: 30vw;
        font-size: 2.917vw;
    }
    .joinDesc21
    {
        margin-top: -3vh;
        height: 7.59vh;
        width: 30vw;
        font-size: 1.563vw;
        color:#000000
    }
}
/*Rest Of Devices*/
@media (min-width: 1025px) and (max-width: 1280px){
  .maindiv{
      z-index: 0;
      background-color:#ececec;
      background-image: url("../assets/map2.svg");
      width: 100vw;
      height: 100vh;
      display:flex; 
      justify-content: center;
      align-items: center;
    } 
    .centerdiv{
      clear: left;
      z-index: 1;
      display:inline-block;
      position: relative;
    margin-left: 7vw;
      

    }
    .el-icon-user-solid{
      size: 100px;
    }
    .usericon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .para{
      font-family:sans-serif;
      font-weight: 600;
      font-size: larger;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3400c5;
    }
    .buttondiv1
    {
      margin-top: 5vh;
      margin-left: -7vw; 
      margin-right: 0.5vw;
      background-color:#3400c5 ;
      float: left;
      width: 10.5vw;
      font-weight:600 ;
    }
    .buttondiv2
    {
      margin-top: 5vh;
      margin-left: -3vw; 
      margin-right: 1vw;
      float: left;
      width: 10.5vw;
      background-color:#dfd6f7 ;
      color: black;
        font-weight:600 ;
    }
    .formdiv{
      width: 27vw;
    }
    .hovercard{
      width: 30vw;
    } 
    .joinBody1
    {
      margin-left: -4vw;
      height: 56.2962vh;
      display:inline-block;
      font-size: 4.167vw;
      color: #707070;
    }
    .joinDesc11
    {
        color:#3400c5;
        font-family: 'Manrope', Manrope;
        margin-top: 10vh;
        height: 14.4444vh;
        width: 42.5vw;
        font-size: 2.917vw;
    }
    .joinDesc21
    {
        margin-top: 5vh;
        height: 7.59vh;
        width: 38.750vw;
        font-size: 1.563vw;
        color:#000000
    }
}
@media (min-width: 768px) and (max-width: 1024px){
  .maindiv{
      z-index: 0;
      background-color:#ececec;
      background-image: url("../assets/map2.svg");
      width: 100vw;
      height: 100vh;
      display:flex; 
      justify-content: center;
      align-items: center;
    } 
    .centerdiv{
      clear: left;
      z-index: 1;
      display:inline-block;
      position: relative;
    margin-left: 3vw;
      

    }
    .el-icon-user-solid{
      size: 100px;
    }
    .usericon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .para{
      font-family:sans-serif;
      font-weight: 600;
      font-size: larger;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3400c5;
    }
    .buttondiv1
    {
      margin-top: 5vh;
      margin-left: -10.5vw; 
      margin-right: 0.5vw;
      background-color:#3400c5 ;
      float: left;
      width: 13.5vw;
      font-weight:600 ;
    }
    .buttondiv2
    {
      margin-top: 5vh;
      margin-left: -3vw; 
      margin-right: 1vw;
      float: left;
      width: 13.5vw;
      background-color:#dfd6f7 ;
      color: black;
        font-weight:600 ;
    }
    .formdiv{
      width: 32vw;
    }
    .hovercard{
      width: 35vw;
    } 
    .joinBody1
    {
      margin-left: -2vw;
      height: 56.2962vh;
      display:inline-block;
      font-size: 4.167vw;
      color: #707070;
    }
    .joinDesc11
    {
        color:#3400c5;
        font-family: 'Manrope', Manrope;
        margin-top: 10vh;
        height: 14.4444vh;
        width: 42.5vw;
        font-size: 2.917vw;
    }
    .joinDesc21
    {
        margin-top: -2vh;
        height: 6vh;
        width: 38.750vw;
        font-size: 1.563vw;
        color:#000000
    }
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape){
  .maindiv{
      z-index: 0;
      background-color:#ececec;
      background-image: url("../assets/map2.svg");
      width: 100vw;
      height: 100vh;
      display:flex; 
      justify-content: center;
      align-items: center;
    } 
    .centerdiv{
      clear: left;
      z-index: 1;
      display:inline-block;
      position: relative;
    margin-left: 3vw;
      

    }
    .el-icon-user-solid{
      size: 100px;
    }
    .usericon{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .para{
      font-family:sans-serif;
      font-weight: 600;
      font-size: larger;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #3400c5;
    }
    .buttondiv1
    {
      margin-top: 5vh;
      margin-left: -10.5vw; 
      margin-right: 0.5vw;
      background-color:#3400c5 ;
      float: left;
      width: 13.5vw;
      font-weight:600 ;
    }
    .buttondiv2
    {
      margin-top: 5vh;
      margin-left: -3vw; 
      margin-right: 1vw;
      float: left;
      width: 13.5vw;
      background-color:#dfd6f7 ;
      color: black;
        font-weight:600 ;
    }
    .formdiv{
      width: 32vw;
    }
    .hovercard{
      width: 35vw;
    } 
    .joinBody1
    {
      margin-left: -2vw;
      height: 56.2962vh;
      display:inline-block;
      font-size: 4.167vw;
      color: #707070;
    }
    .joinDesc11
    {
        color:#3400c5;
        font-family: 'Manrope', Manrope;
        margin-top: 10vh;
        height: 14.4444vh;
        width: 42.5vw;
        font-size: 2.917vw;
    }
    .joinDesc21
    {
        margin-top: -2vh;
        height: 6vh;
        width: 38.750vw;
        font-size: 1.563vw;
        color:#000000
    }
}
</style>