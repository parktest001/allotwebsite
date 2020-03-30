<template>
  <div class="container" style="background-color: #DEDAE4; border: 2px solid #5A487A">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          
          <div class="card-body" v-if="user.loggedIn">
              <div> 
            <!-- <el-button @click="getImages()">Get Images</el-button> -->
            <div v-if="flag">
              
              <div v-for="(key,value) in jsoninfo" :key="key.url" style="padding-top:20px">
                <center>
              <el-card :body-style="{ padding: '0px' }" style="background-color: #F8F8FF;padding-top:20px;width:1000px;  border: 2px solid #5A487A;border-right: 8px solid #5A487A;border-left: 8px solid #5A487A;">
                <center>
                  <div style="padding-bottom:10px">
                <img :src="key.url" :class="imageview" style="width:800px;" >
                <div style="background-color: #DEDAE4;padding-top:20px; width:800px;height:100px;border:2px solid #5A487A;padding-bottom:10px ">
                  <div><div style="float:left;font-size:15px;font-weight:bold">Uploader:&nbsp;&nbsp;</div>
                  <div style="float:left;font-size:15px">{{key.name}}</div><img src="../assets/google-logo.png" style="width:20px;height:20px;float:left" /></div>
                  <br>
                  <div style="padding-top:5px">
                  <div style="float:left;font-size:20px;font-weight:bold">Description:&nbsp;&nbsp;</div>
                  <div v-if="key.description" style="float:left;padding-top:3.5px;">{{key.description}}</div>
                  <div v-else style="float:left;padding-top:3.5px;">The uploader not described photo</div></div>
                  
                </div>
                  </div>
                </center>
              </el-card>
                </center>
              </div>
              <!-- <div v-for="value in imgurlarr" :key="value">{{value}}</div> -->
            </div>
            </div>
            
          </div >
                  <div style="height:800px" v-else><center style="padding-top:200px"><h1>Please Login</h1></center></div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
        jsoninfo: null,
        mobnum: "null",
        otp: "",
        text: null,
        result: null,
        fileGlobe: null,
        imgSrc: null,
        description : "",
        flag : false,
        imgurlarr : "",
    };
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  created()
  {
                var self = this
                this.flag=true
                firebase.database().ref().once('value', function(snap){
                self.jsoninfo=snap.val()
                self.getSingleImage();
                window.flag=true
                console.log(snap.val())
                })
  },
  methods: {

 
    
        getSingleImage()
        {
            // for(var val in this.jsoninfo){
                var self = this
            Object.values(this.jsoninfo).forEach(function(item){
            //console.log(item[0])
            // var source = this;
            // var storageRef = firebase.storage();
            // var starsRef = storageRef.ref('1585510009885-Screenshot 2020-03-29 at 9.52.44 PM.png');

            // starsRef.getDownloadURL().then(function(url) {

            //     var img = document.getElementById('myImage');
            //     img.src = url;
            //     source.imgurlarr.push(url)                
            // });
            });
        },
        store(key)
        {
            //var source = value;
            

                var img = document.getElementById(key.url);
                console.log(img)
                if(img.src != null){
                img.src = key.url;
                }
                //source.imgurlarr.push(url)                

        },
    },
};
</script>