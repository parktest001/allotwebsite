<template>

<div class = "main">
      <navbar></navbar>

<div class="mainDiv">
  <div class="subDiv">
  <div class="desc">
    <p><span style="color:#3400C5;font-weight:bold">Parking </span> <span style="color:#000000">experience</span> <br><span style="color:#000000">made </span> <span style="color:#3400C5;font-weight:bold">better.</span></p>
  </div>
  <div class="descBelow">
    <p>Now you can spend less time searching for a safe parking space and more time in doing what you wanted to do.</p>
  </div>
  <div class="descQr">
    <p>Scan this code to download the app</p>
  </div>
  <div >
    <img class="qr" src="../assets/QR.svg">
  </div>
  </div>
  <div class="imgRight">
    <img class="imgRight" src="../assets/Feature.svg" />
  </div>
</div>
<div class="featureHeading">
    <center><p style="font-weight:bold;">Features</p></center>
  </div>
<div class="mainCard">
<div class = "cardItem" style="  box-shadow: 2px 2px 2px 2px #d0d0d0;">
   <img class="cardView" src="../assets/searchIcon.svg"/>
    <div class="cardHead">Search</div>
    <div class="cardDesc">You can now search for a free parking space at your destination, at your own comfort, and eliminate the frustration filled parking search once you reach your destination.</div>
</div>
<div class = "cardItem" style="margin-left:0.833vw;box-shadow: 2px 2px 2px 2px #d0d0d0;">
   <img class="cardView" src="../assets/parkIcon.svg"/>
      <div class="cardHead">Park Now</div>
      <div class="cardDesc">This feature lets you book a slot <br>for your vehicle right away, when <br>you are close to or already at your<br> destination. You will receive a QR <br>code that can be used at the <br>parking. The QR code will be valid <br>only for 15 minutes.</div>
</div>
<div class = "cardItem" style="margin-left:0.833vw;box-shadow: 2px 2px 2px 2px #d0d0d0;">
   <img class="cardView" src="../assets/parkLaterIcon.svg"/>
      <div class="cardHead">Park Later</div>
      <div class="cardDesc">The Park Later feature is to book a slot in advance, at least 20 mins. Once a slot has been requested at the desired parking, your request will be queued and you will receive the confirmation QR code 15 minutes prior your requested time.</div>
</div>
<div class = "cardItem" style="margin-left:0.833vw;box-shadow: 2px 2px 2px 2px #d0d0d0;">
   <img class="cardView" src="../assets/payIcon.svg"/>
      <div class="cardHead">Park and Pay</div>
      <div class="cardDesc">Once you have parked your <br>vehicle, the metering starts and<br> upon completing your parking, the <br>bill details are available to you in<br> the app. You can pay using our in-<br>app UPI integration. You can also <br>choose to pay using cash. </div>
</div>

</div>
  <div class="featureBody">
    <div class="featureImage border">
      <div class="featureImageMain ">
        <lottie :options="defaultOptions" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
      </div>
    </div>
    <div style="float:left;margin-left: 3.3333vw;">
    <div class="featureDesc1" style="font-weight:600">Search for parking spaces</div>
    <div class="featureDesc2">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</div>
    </div>
  <div>

  </div>
  </div>
 <img class="dottedLine" src="../assets/Path 1.svg"/>
  <div class="bookBody">
    <div class="bookImage border">
      <div class="bookImageMain ">
        <lottie :options="defaultOptions1" :height="400" :width="400" />
       
      </div>
    </div>
    <div style="float:left;margin-left: 3.3333vw;">
    <div class="bookDesc1" style="font-weight:600">Book a slot</div>
    <div class="bookDesc2">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</div>
    </div>
  </div>
   <img class="dottedLine" src="../assets/Path 2.svg"/>

  <div class="payBody ">
    <div class="payImage border">
      <div class="payImageMain ">
        <lottie :options="defaultOptions2" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
      </div>
    </div>
    <div style="float:left;margin-left: 3.3333vw;">
    <div class="payDesc1" style="font-weight:600">Park and Pay</div>
    <div class="payDesc2">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one.</div>
    </div>
  </div>
  <div class="joinBody">
      <div class="joinImageMain ">
        <lottie :options="defaultOptions4" :height="400" :width="400" v-on:animCreated="handleAnimation"/>
      </div>
    <div style="float:left;">
    <div class="joinDesc1" style="font-weight:600">Do you have a space <br>that can be used as a parking?</div>
    <div class="joinDesc2">You can partner with use as a vendor and earn money with ease.</div>
    <el-button class="menuButtonNew" style="background-color:#3400c5;color:#ffffff" @click="pushPage">JOIN AS VENDOR</el-button>
    </div>
  </div>
<center>
  <div class="downloadQr">
  <div class="innerDownloadQr">Download our app for free <br>and have a better parking experience.</div>
    <img class="qrBottom" src="../assets/QR.svg">
  <div class="descQrBottom">
    <p style="font-weight:600;font-weight:600">Scan this code to download the app</p>
  </div>
</div>
</center>
<div class="footer">
<center><img class="footerLogo" src="../assets/LogoFooter.svg"/></center>
<center><div class="footerText">Parking experience made better.</div></center>
<div class="footerNav">
  <div style="float:left;margin-left:28.333vw">Home</div>
  <div style="float:left;margin-left:3.802vw">Features</div>
  <div style="float:left;margin-left:3.125vw">Download App</div>
  <div style="float:left;margin-left:3.802vw">Privacy Policy</div>
  <div style="float:left;margin-left:3.801vw">Terms of Service</div>

</div>
<br>
<center><div class="footerSocial">©2020 Allot Inc.</div></center>

</div>
</div>
</template>
<script>

import { mapGetters } from "vuex";

import navbar from "../components/Navbar";

import Lottie from "vue-lottie";

import animationData1 from "../assets/Book_Final.json";
import animationData from "../assets/Search_Final.json";
import animationData2 from "../assets/Pay_Final.json";
import animationData3 from "../assets/Park_Final.json";
import animationData4 from "../assets/map_search.json";



let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
export default {
  name:'bookImageMain',
  components: {
    navbar,
    'lottie': Lottie

  },
  data(){
    return{
      defaultOptions1: {animationData: animationData1},
      defaultOptions: {animationData: animationData},
      defaultOptions2: {animationData: animationData2},
      defaultOptions3: {animationData: animationData3},
      defaultOptions4: {animationData: animationData4}
    }
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },

  methods: {
   pushPage()
    {
      this.$router.push('/vendor');
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

.border
{
  border: 0.5px;
  border-color:#3400c5;
  border-style: solid;
}


/* 
  ##Device = Desktops
  ##Screen = 1281px to higher resolution desktops
*/

@media (min-width: 1281px) {
  
  .menuicon
{
  font-size: 18px
}
.main
{
  margin: 0;
}
.dottedLine
{
  width:55vw;
  margin-left:20vw;
}
.cardView
{
  float:left;
  margin-left:0.667vw;
  margin-top: 3.7037vh;
  width:4.444vw;
  height:4.7037vh;
}
.cardHead
{
  float:left;
  margin-top:4vh;
  margin-left:0.750vw;
  color:#3400C5;
  font-size:1.458vw;
  font-weight:600
}
.cardDesc
{
  width:17.500vw;
  margin-top:10.3703vh;
  margin-left:1.667vw;
  margin-right:1.667vw;
  font-size:1.042vw
}
.mainCard
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 6.4814vh;
  height: 34.8148vh;
  width: 87.5vw;
}
.cardItem
{
  float: left;
  width: 20.833vw;
  height:  34.8148vh;
  background-color: #ffffff;
}
.cardItem:hover {
  -ms-transform: scale(1); /* IE 9 */
  -webkit-transform: scale(1); /* Safari 3-8 */
  transform: scale(1.2); 
  transition: 0.5s;
}
.imgRight
{
  float: right;
  
  width: 40.938vw;
  height: 78.5185vh;
}
.mainDiv
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 11.1111vh;
  display:inline-block;
}
.subDiv
{
  float: left;
  height: 78.5185vh;
}
.desc
{
  font-family: 'Manrope', Manrope;
  width: 38.438vw;
  margin-right:4.5vw;
  height: 19.7222vh;
  font-size: 4.167vw;
}
.descBelow
{
  width: 35vw;
  height: 12.8703vh;
  font-size: 1.667vw;
  color: #000000;
}
.descQr
{
  font-family: 'Manrope', Manrope;
  width: 35vw;
  height: 2.9629vh;
  margin-top: 4.5vh;
  font-size: 1.198vw;
  color: #000000;
}
.qr
{
  margin-top: 2.9629vh;
  width: 10.833vw;
  height: 19.2592vh;
  color: #707070;
}
.featureHeading
{
  width: 100%;
  font-family: 'Manrope', Manrope;
  margin-top: 11.8518vh;
  display:inline-block;
  height: 10.0925vh;
  font-size: 4.167vw;
  color: #000000;
}
.featureBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top:  21.5740vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.featureImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  
  /* background-color: #F5F4F8; */

}
.featureImageMain
{
  float: left;
  /* margin-top: 9.6666vh; */
  height: 48.8148vh;
  width: 10.583vw;
  align-content: center;
  /* margin-bottom: 10.6666vh; */
  /* margin-left: 2.750vw; */
  /* background-color: #F5F4F8; */
}
.featureDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 12.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.featureDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    font-size: 1.458vw;
    color:#000000;
}
.bookBody
{
  margin-left: 15.8333vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.bookImage
{
  margin-right: 7.5vw;
  float: right;
  height: 48.1481vh;
  width: 27.083vw;
  /* background-color: #F5F4F8; */

}
.bookImageMain
{
  /* margin-top: 6.6666vh; */
  height: 34.8148vh;
  width: 19.583vw;
  /* margin-left: 3.750vw;
  background-color: #F5F4F8; */
}
.bookDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 15.3703vh;
    margin-right: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.bookDesc2
{
    margin-top: 3.2407vh;
    margin-right: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.payBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.payImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  /* background-color: #F5F4F8; */

}
.payImageMain
{
  /* margin-top: 6.6666vh; */
  height: 34.8148vh;
  width: 19.583vw;
  /* margin-left: 3.750vw;
  background-color: #F5F4F8; */
}
.payDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.payDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.joinBody
{
  margin-left: 7.5vw;
  height: 56.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinImageMain
{
  margin-top: 6.6666vh;
  float: right;
  height: 56.2962vh;
  width: 33.750vw;
  margin-right: 7.5vw;
  background-color: #F5F4F8;
}
.joinDesc1
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 14.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc2
{
    margin-top: 3.2407vh;
    height: 7.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
}
.menuButtonNew
{
  font-family: 'Manrope', Manrope;
  background-color: #ffffff;
  font-size:0.938vw;
}
.downloadQr
{
  text-align: center;
  margin-top: 30.4629vh;
  width: 53.333vw;
  font-size: 2.917vw;
  color: #000000;
}
.innerDownloadQr
{
  height: 25vh;
  font-weight:600;
}
.qrBottom
{
  height: 24.9074;
  color: #707070;
  margin: auto;
}
.descQrBottom
{
  color:#3400C5;
  font-family: 'Manrope', Manrope;
  height: 2.9629vh;
  font-size: 1.198vw;
  margin: auto;
  text-align: center;
}
.footer
{
  margin-top: 26.5740vh;
  background-color: #3400c5;
  height:74.8148vh;
  width: 100%;
  display:inline-block;
}
.footerLogo
{
  margin-top: 8.2407vh;
  height: 10vh;
  width: 13.696vw;
}
.footerText
{
  color:#ffffff;
  font-size: 2.083vw;
  margin-top: 5.2777vh;
}
.footerNav
{
  color:#ffffff;
  margin-top: 7.8703vh;
  font-size: 1.042vw;
}
.footerSocial
{
  font-size: 2vw;
  color:#ffffff;
}
}

@media (min-width: 320px) and (max-width: 480px) {
  .cardView
{
  float:left;
  margin-left:1.667vw;
  margin-top:  2.08333vh;
  width:2.083vw;
  height: 1.2vh;
}
.dottedLine
{
  width:50vw;
  margin-left:20vw;
}
.cardHead
{
  float:left;
  margin-top: 2.28333vh;
  margin-left:1.250vw;
  color:#3400C5;
  font-size:1.458vw;
  font-weight:600
}
.cardDesc
{
  width:17.500vw;
  margin-top:5.8333vh;
  margin-left:1.667vw;
  margin-right:1.667vw;
  font-size:1.042vw
}
  .menuicon
{
  font-size: 18px
}
.mainCard
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 3.6458vh;
  height: 19.5833vh;
  width: 87.5vw;
}
.cardItem
{
  float: left;
  width: 20.833vw;
  height:  12.5833vh;
  background-color: #ffffff;
}
.imgRight
{
  float: right;
  background-color: #d9d9d9;
  width: 40.938vw;
  height: 34vh;
}
.mainDiv
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 5.41666vh;
  display:inline-block;
}
.subDiv
{
  float: left;
}
.desc
{
  font-family: 'Manrope', Manrope;
  width: 38.438vw;
  height: 9.5833vh;
  font-size: 4.167vw;
}
.descBelow
{
  width: 35vw;
  height: 6.14583vh;
  font-size: 1.667vw;
  color: #000000;
}
.descQr
{
  font-family: 'Manrope', Manrope;
  width: 35vw;
  height: 1.1979vh;
  margin-top: 4.6354vh;
  font-size: 1.198vw;
  color: #000000;
}
.qr
{
  width: 10.833vw;
  height: 10.8333vh;
  color: #707070;
}
.featureHeading
{
  width: 100%;
  font-family: 'Manrope', Manrope;
  margin-top: 2.6041vh;
  display:inline-block;
  height: 10.0925vh;
  font-size: 4.167vw;
  color: #000000;
}
.featureBody
{
  height: 12.0833vh;
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.featureImage
{
  float: left;
  height: 12.0833vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.featureImageMain
{
  height: 7.583vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.featureDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 1vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.featureDesc2
{
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    font-size: 1.458vw;
    color:#000000;
}
.bookBody
{
  height: 12.0833vh;
  margin-left: 10.8333vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.bookImage
{
  margin-right: 7.5vw;
  float: right;
  height: 12.0833vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.bookImageMain
{
  height: 7.583vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.bookDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 1vh;
    margin-right: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.bookDesc2
{
    margin-right: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.payBody
{
  height: 12.0833vh;
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.payImage
{
  float: left;
  height: 12.0833vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.payImageMain
{
  height: 7.583vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.payDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 1vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.payDesc2
{
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.joinBody
{
  margin-left: 7.5vw;
  height: 20.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinImageMain
{
  margin-top: 6.6666vh;
  float: right;
  height: 20.2962vh;
  width: 33.750vw;
  margin-right: 7.5vw;
  background-color: #F5F4F8;
}
.joinDesc1
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 3.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc2
{
    margin-top: 3.2407vh;
    height: 4.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
}
.menuButtonNew
{
  font-family: 'Manrope', Manrope;
  background-color: #ffffff;
  font-size:0.938vw;
}
.downloadQr
{
  text-align: center;
  margin-top: 16.4629vh;
  width: 53.333vw;
  font-size: 2.917vw;
  color: #000000;
}
.innerDownloadQr
{
  height: 10vh;
  font-weight:600;
}
.qrBottom
{
  height: 14.9074vh;
  color: #707070;
  margin: auto;
}
.descQrBottom
{
  color:#3400C5;
  font-family: 'Manrope', Manrope;
  height: 2.9629vh;
  font-size: 1.198vw;
  margin: auto;
  text-align: center;
}
.footer
{
  margin-top: 8.5740vh;
  background-color: #3400c5;
  height:27.8148vh;
  width: 100%;
  display:inline-block;
}
.footerLogo
{
  margin-top: 1.2407vh;
  height: 10vh;
  width: 13.696vw;
}
.footerText
{
  color:#ffffff;
  font-size: 2.083vw;
  margin-top: 1.2777vh;
}
.footerNav
{
  color:#ffffff;
  margin-top: 2.8703vh;
  font-size: 1.042vw;
}
.footerSocial
{
  color:#ffffff;
  font-size:2.5vw;
}
}




/*Rest Of Devices*/
@media (min-width: 1025px) and (max-width: 1280px) {
  
   .menuicon
{
  font-size: 18px
}
.cardView
{
  float:left;
  margin-left:1.667vw;
  margin-top: 3.7037vh;
  width:4.444vw;
  height:3.7037vh;
}
.dottedLine
{
  width:55vw;
  margin-left:20vw;
}
.cardHead
{
  float:left;
  margin-top:4vh;
  margin-left:1.250vw;
  color:#3400C5;
  font-size:1.458vw;
  font-weight:600
}
.cardDesc
{
  width:17.500vw;
  margin-top:10.3703vh;
  margin-left:1.667vw;
  margin-right:1.667vw;
  font-size:1.042vw
}
.mainCard
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 6.4814vh;
  height: 34.8148vh;
  width: 87.5vw;
}
.cardItem
{
  float: left;
  width: 20.833vw;
  height:  34.8148vh;
  background-color: #ffffff;
}
.imgRight
{
  float: right;
  background-color: #d9d9d9;
  width: 40.938vw;
  height: 78.5185vh;
}
.mainDiv
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 11.1111vh;
  display:inline-block;
}
.subDiv
{
  float: left;
  height: 78.5185vh;
}
.desc
{
  font-family: 'Manrope', Manrope;
  width: 38.438vw;
  margin-right:4.5vw;
  height: 19.7222vh;
  font-size: 4.167vw;
}
.descBelow
{
  width: 35vw;
  height: 12.8703vh;
  font-size: 1.667vw;
  color: #000000;
}
.descQr
{
  font-family: 'Manrope', Manrope;
  width: 35vw;
  height: 2.9629vh;
  margin-top: 4.5vh;
  font-size: 1.198vw;
  color: #000000;
}
.qr
{
  margin-top: 2.9629vh;
  width: 10.833vw;
  height: 19.2592vh;
  color: #707070;
}
.featureHeading
{
  width: 100%;
  font-family: 'Manrope', Manrope;
  margin-top: 11.8518vh;
  display:inline-block;
  height: 10.0925vh;
  font-size: 4.167vw;
  color: #000000;
}
.featureBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top:  21.5740vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.featureImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.featureImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.featureDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.featureDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.bookBody
{
  margin-left: 15.8333vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.bookImage
{
  margin-right: 7.5vw;
  float: right;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.bookImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.bookDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-right: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.bookDesc2
{
    margin-top: 3.2407vh;
    margin-right: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.payBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.payImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.payImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.payDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.payDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.joinBody
{
  margin-left: 7.5vw;
  height: 56.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinImageMain
{
  margin-top: 6.6666vh;
  float: right;
  height: 56.2962vh;
  width: 33.750vw;
  margin-right: 7.5vw;
  background-color: #F5F4F8;
}
.joinDesc1
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 14.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc2
{
    margin-top: 3.2407vh;
    height: 7.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
}
.menuButtonNew
{
  font-family: 'Manrope', Manrope;
  background-color: #ffffff;
  font-size:0.938vw;
}
.downloadQr
{
  text-align: center;
  margin-top: 30.4629vh;
  width: 53.333vw;
  font-size: 2.917vw;
  color: #000000;
}
.innerDownloadQr
{
  height: 25vh;
  font-weight:600;
}
.qrBottom
{
  height: 24.9074;
  color: #707070;
  margin: auto;
}
.descQrBottom
{
  color:#3400C5;
  font-family: 'Manrope', Manrope;
  height: 2.9629vh;
  font-size: 1.198vw;
  margin: auto;
  text-align: center;
}
.footer
{
  margin-top: 26.5740vh;
  background-color: #3400c5;
  height:74.8148vh;
  width: 100%;
  display:inline-block;
}
.footerLogo
{
  margin-top: 8.2407vh;
  height: 10vh;
  width: 13.696vw;
}
.footerText
{
  color:#ffffff;
  font-size: 2.083vw;
  margin-top: 5.2777vh;
}
.footerNav
{
  color:#ffffff;
  margin-top: 7.8703vh;
  font-size: 1.042vw;
}
.footerSocial
{
  font-size: 2vw;
  color:#ffffff;
}
}
@media (min-width: 768px) and (max-width: 1024px) {
   .menuicon
{
  font-size: 18px
}
.cardView
{
  float:left;
  margin-left:1.667vw;
  margin-top: 3.7037vh;
  width:4.444vw;
  height:3.7037vh;
}
.dottedLine
{
  width:55vw;
  margin-left:20vw;
}
.cardHead
{
  float:left;
  margin-top:4vh;
  margin-left:1.250vw;
  color:#3400C5;
  font-size:1.458vw;
  font-weight:600
}
.cardDesc
{
  width:17.500vw;
  margin-top:10.3703vh;
  margin-left:1.667vw;
  margin-right:1.667vw;
  font-size:1.042vw
}
.mainCard
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 6.4814vh;
  height: 34.8148vh;
  width: 87.5vw;
}
.cardItem
{
  float: left;
  width: 20.833vw;
  height:  34.8148vh;
  background-color: #ffffff;
}
.imgRight
{
  float: right;
  background-color: #d9d9d9;
  width: 40.938vw;
  height: 78.5185vh;
}
.mainDiv
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 11.1111vh;
  display:inline-block;
}
.subDiv
{
  float: left;
  height: 78.5185vh;
}
.desc
{
  font-family: 'Manrope', Manrope;
  width: 38.438vw;
  margin-right:4.5vw;
  height: 19.7222vh;
  font-size: 4.167vw;
}
.descBelow
{
  width: 35vw;
  height: 12.8703vh;
  font-size: 1.667vw;
  color: #000000;
}
.descQr
{
  font-family: 'Manrope', Manrope;
  width: 35vw;
  height: 2.9629vh;
  margin-top: 4.5vh;
  font-size: 1.198vw;
  color: #000000;
}
.qr
{
  margin-top: 2.9629vh;
  width: 10.833vw;
  height: 19.2592vh;
  color: #707070;
}
.featureHeading
{
  width: 100%;
  font-family: 'Manrope', Manrope;
  margin-top: 11.8518vh;
  display:inline-block;
  height: 10.0925vh;
  font-size: 4.167vw;
  color: #000000;
}
.featureBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top:  21.5740vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.featureImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.featureImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.featureDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.featureDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.bookBody
{
  margin-left: 15.8333vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.bookImage
{
  margin-right: 7.5vw;
  float: right;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.bookImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.bookDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-right: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.bookDesc2
{
    margin-top: 3.2407vh;
    margin-right: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.payBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.payImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.payImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.payDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.payDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.joinBody
{
  margin-left: 7.5vw;
  height: 56.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinImageMain
{
  margin-top: 6.6666vh;
  float: right;
  height: 56.2962vh;
  width: 33.750vw;
  margin-right: 7.5vw;
  background-color: #F5F4F8;
}
.joinDesc1
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 14.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc2
{
    margin-top: 3.2407vh;
    height: 7.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
}
.menuButtonNew
{
  font-family: 'Manrope', Manrope;
  background-color: #ffffff;
  font-size:0.938vw;
}
.downloadQr
{
  text-align: center;
  margin-top: 30.4629vh;
  width: 53.333vw;
  font-size: 2.917vw;
  color: #000000;
}
.innerDownloadQr
{
  height: 25vh;
  font-weight:600;
}
.qrBottom
{
  height: 24.9074;
  color: #707070;
  margin: auto;
}
.descQrBottom
{
  color:#3400C5;
  font-family: 'Manrope', Manrope;
  height: 2.9629vh;
  font-size: 1.198vw;
  margin: auto;
  text-align: center;
}
.footer
{
  margin-top: 26.5740vh;
  background-color: #3400c5;
  height:74.8148vh;
  width: 100%;
  display:inline-block;
}
.footerLogo
{
  margin-top: 8.2407vh;
  height: 10vh;
  width: 13.696vw;
}
.footerText
{
  color:#ffffff;
  font-size: 2.083vw;
  margin-top: 5.2777vh;
}
.footerNav
{
  color:#ffffff;
  margin-top: 7.8703vh;
  font-size: 1.042vw;
}
.footerSocial
{
  font-size: 2vw;
  color:#ffffff;
}
  
}
/*Mobile Landscape*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
   .menuicon
{
  font-size: 18px
}
.cardView
{
  float:left;
  margin-left:1.667vw;
  margin-top: 3.7037vh;
  width:4.444vw;
  height:3.7037vh;
}
.dottedLine
{
  width:55vw;
  margin-left:20vw;
}
.cardHead
{
  float:left;
  margin-top:4vh;
  margin-left:1.250vw;
  color:#3400C5;
  font-size:1.458vw;
  font-weight:600
}
.cardDesc
{
  width:17.500vw;
  margin-top:10.3703vh;
  margin-left:1.667vw;
  margin-right:1.667vw;
  font-size:1.042vw
}
.mainCard
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 6.4814vh;
  height: 34.8148vh;
  width: 87.5vw;
}
.cardItem
{
  float: left;
  width: 20.833vw;
  height:  34.8148vh;
  background-color: #ffffff;
}
.imgRight
{
  float: right;
  background-color: #d9d9d9;
  width: 40.938vw;
  height: 78.5185vh;
}
.mainDiv
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 11.1111vh;
  display:inline-block;
}
.subDiv
{
  float: left;
  height: 78.5185vh;
}
.desc
{
  font-family: 'Manrope', Manrope;
  width: 38.438vw;
  margin-right:3.5vw;
  height: 19.7222vh;
  font-size: 4.167vw;
}
.descBelow
{
  width: 35vw;
  height: 12.8703vh;
  font-size: 1.667vw;
  color: #000000;
}
.descQr
{
  font-family: 'Manrope', Manrope;
  width: 35vw;
  height: 2.9629vh;
  margin-top: 4.5vh;
  font-size: 1.198vw;
  color: #000000;
}
.qr
{
  margin-top: 2.9629vh;
  width: 10.833vw;
  height: 19.2592vh;
  color: #707070;
}
.featureHeading
{
  width: 100%;
  font-family: 'Manrope', Manrope;
  margin-top: 11.8518vh;
  display:inline-block;
  height: 10.0925vh;
  font-size: 4.167vw;
  color: #000000;
}
.featureBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top:  21.5740vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.featureImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.featureImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.featureDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.featureDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.bookBody
{
  margin-left: 15.8333vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.bookImage
{
  margin-right: 7.5vw;
  float: right;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.bookImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.bookDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-right: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.bookDesc2
{
    margin-top: 3.2407vh;
    margin-right: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.payBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.payImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.payImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.payDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.payDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.joinBody
{
  margin-left: 7.5vw;
  height: 56.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinImageMain
{
  margin-top: 6.6666vh;
  float: right;
  height: 56.2962vh;
  width: 33.750vw;
  margin-right: 7.5vw;
  background-color: #F5F4F8;
}
.joinDesc1
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 14.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc2
{
    margin-top: 3.2407vh;
    height: 7.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
}
.menuButtonNew
{
  font-family: 'Manrope', Manrope;
  background-color: #ffffff;
  font-size:0.938vw;
}
.downloadQr
{
  text-align: center;
  margin-top: 30.4629vh;
  width: 53.333vw;
  font-size: 2.917vw;
  color: #000000;
}
.innerDownloadQr
{
  height: 25vh;
  font-weight:600;
}
.qrBottom
{
  height: 24.9074;
  color: #707070;
  margin: auto;
}
.descQrBottom
{
  color:#3400C5;
  font-family: 'Manrope', Manrope;
  height: 2.9629vh;
  font-size: 1.198vw;
  margin: auto;
  text-align: center;
}
.footer
{
  margin-top: 26.5740vh;
  background-color: #3400c5;
  height:74.8148vh;
  width: 100%;
  display:inline-block;
}
.footerLogo
{
  margin-top: 8.2407vh;
  height: 10vh;
  width: 13.696vw;
}
.footerText
{
  color:#ffffff;
  font-size: 2.083vw;
  margin-top: 5.2777vh;
}
.footerNav
{
  color:#ffffff;
  margin-top: 7.8703vh;
  font-size: 1.042vw;
}
.footerSocial
{
  font-size: 2vw;
  color:#ffffff;
}
  
}

@media (min-width: 481px) and (max-width: 767px) {
   .menuicon
{
  font-size: 18px
}
.cardView
{
  float:left;
  margin-left:1.667vw;
  margin-top: 3.7037vh;
  width:4.444vw;
  height:3.7037vh;
}
.dottedLine
{
  width:55vw;
  margin-left:20vw;
}
.cardHead
{
  float:left;
  margin-top:4vh;
  margin-left:1.250vw;
  color:#3400C5;
  font-size:1.458vw;
  font-weight:600
}
.cardDesc
{
  width:17.500vw;
  margin-top:10.3703vh;
  margin-left:1.667vw;
  margin-right:1.667vw;
  font-size:1.042vw
}
.mainCard
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 6.4814vh;
  height: 34.8148vh;
  width: 87.5vw;
}
.cardItem
{
  float: left;
  width: 20.833vw;
  height:  34.8148vh;
  background-color: #ffffff;
}
.imgRight
{
  float: right;
  background-color: #d9d9d9;
  width: 40.938vw;
  height: 78.5185vh;
}
.mainDiv
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top: 11.1111vh;
  display:inline-block;
}
.subDiv
{
  float: left;
  height: 78.5185vh;
}
.desc
{
  font-family: 'Manrope', Manrope;
  width: 38.438vw;
  margin-right:2.5vw;
  height: 19.7222vh;
  font-size: 4.167vw;
}
.descBelow
{
  width: 35vw;
  height: 12.8703vh;
  font-size: 1.667vw;
  color: #000000;
}
.descQr
{
  font-family: 'Manrope', Manrope;
  width: 35vw;
  height: 2.9629vh;
  margin-top: 4.5vh;
  font-size: 1.198vw;
  color: #000000;
}
.qr
{
  margin-top: 2.9629vh;
  width: 10.833vw;
  height: 19.2592vh;
  color: #707070;
}
.featureHeading
{
  width: 100%;
  font-family: 'Manrope', Manrope;
  margin-top: 11.8518vh;
  display:inline-block;
  height: 10.0925vh;
  font-size: 4.167vw;
  color: #000000;
}
.featureBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  margin-top:  21.5740vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.featureImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.featureImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.featureDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.featureDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.bookBody
{
  margin-left: 15.8333vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.bookImage
{
  margin-right: 7.5vw;
  float: right;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.bookImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.bookDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-right: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.bookDesc2
{
    margin-top: 3.2407vh;
    margin-right: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.payBody
{
  margin-left: 7.5vw;
  margin-right: 7.5vw;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.payImage
{
  float: left;
  height: 48.1481vh;
  width: 27.083vw;
  background-color: #F5F4F8;

}
.payImageMain
{
  margin-top: 6.6666vh;
  height: 34.8148vh;
  width: 19.583vw;
  margin-left: 3.750vw;
  background-color: #F5F4F8;
}
.payDesc1
{
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    margin-left: 3.3333vw;
    height: 5.0925vh;
    width: 25.729vw;
    font-size: 2.083vw;
    color:#3400C5;
}
.payDesc2
{
    margin-top: 3.2407vh;
    margin-left: 3.3333vw;
    height: 17.5925vh;
    width: 38.750vw;
    color:#000000;
    font-size: 1.458vw;
}
.joinBody
{
  margin-left: 7.5vw;
  height: 56.2962vh;
  display:inline-block;
  font-size: 4.167vw;
  color: #707070;
}
.joinImageMain
{
  margin-top: 6.6666vh;
  float: right;
  height: 56.2962vh;
  width: 33.750vw;
  margin-right: 7.5vw;
  background-color: #F5F4F8;
}
.joinDesc1
{
    color:#3400c5;
    font-family: 'Manrope', Manrope;
    margin-top: 10.3703vh;
    height: 14.4444vh;
    width: 42.5vw;
    font-size: 2.917vw;
}
.joinDesc2
{
    margin-top: 3.2407vh;
    height: 7.59vh;
    width: 38.750vw;
    font-size: 1.563vw;
    color:#000000
}
.menuButtonNew
{
  font-family: 'Manrope', Manrope;
  background-color: #ffffff;
  font-size:0.938vw;
}
.downloadQr
{
  text-align: center;
  margin-top: 30.4629vh;
  width: 53.333vw;
  font-size: 2.917vw;
  color: #000000;
}
.innerDownloadQr
{
  height: 25vh;
  font-weight:600;
}
.qrBottom
{
  height: 24.9074;
  color: #707070;
  margin: auto;
}
.descQrBottom
{
  color:#3400C5;
  font-family: 'Manrope', Manrope;
  height: 2.9629vh;
  font-size: 1.198vw;
  margin: auto;
  text-align: center;
}
.footer
{
  margin-top: 26.5740vh;
  background-color: #3400c5;
  height:74.8148vh;
  width: 100%;
  display:inline-block;
}
.footerLogo
{
  margin-top: 8.2407vh;
  height: 10vh;
  width: 13.696vw;
}
.footerText
{
  color:#ffffff;
  font-size: 2.083vw;
  margin-top: 5.2777vh;
}
.footerNav
{
  color:#ffffff;
  margin-top: 7.8703vh;
  font-size: 1.042vw;
}
.footerSocial
{
  font-size: 2vw;
  color:#ffffff;
}
  
}

</style>