<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Download Image</div>
          <div class="card-body">
              <div>
            <el-button @click="getImages()">Get Images</el-button>
            <div v-if="flag">
              <div v-for="(key,value) in jsoninfo" :key="key.url"><img :src="key.url"/><div>{{key.description}}</div></div>
              <!-- <div v-for="value in imgurlarr" :key="value">{{value}}</div> -->
            </div>
            </div>
            
          </div>
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
  methods: {

 
    getImages() {
                var self = this
                this.flag=true
                firebase.database().ref().once('value', function(snap){
                self.jsoninfo=snap.val()
                self.getSingleImage();
                window.flag=true
                console.log(snap.val())
                })
            
        },
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