<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Upload Image</div>
          <div class="card-body">
              <div>
              <div>    
            <el-card :body-style="{ padding: '0px' }">
            <img id="someImageTagID" class="image">
            <div style="padding: 14px;">
                <el-input v-model="description"></el-input>
                <div class="bottom clearfix">
                <el-button type="text" class="button">Operating</el-button>
                </div>
            </div>
            </el-card>
              </div>
            <img id="uploadedimg" />
            <el-input type="file" id="myfile" name="myfile" @select="showButton()"></el-input>
            <el-button @click="uploadSingleImage()">Upload single image to public</el-button>
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
        mobnum: "null",
        otp: "",
        text: null,
        result: null,
        fileGlobe: null,
        imgSrc: null,
        description : "",
        source : null,
    };
  },
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {

 
    uploadSingleImage() {
                var self=this
                window.description = this.description
                window.username = this.user.data.displayName
                const ref = firebase.storage().ref();
                const file = document.querySelector('#myfile').files[0]
                const name = (+new Date()) + '-' + file.name;
                window.imgname = file.name
                this.fileGlobe=file
                this.imgSrc=file.src
                const metadata = {
                contentType: file.type
                };
                const task = ref.child(name).put(file, metadata);
                task
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then((url) => {
                    console.log(url);
                    window.url=url
                    document.getElementById('uploadedimg').src = url;
                    self.source=url
                    self.saveMeta()
                })
                .catch(console.error);




                
        },
        saveMeta()
        {
                var database = firebase.database();
                var date=new Date()
                var time=date.getTime()
                firebase.database().ref(time).set({
                    description: window.description,
                    name: window.username,
                    profile_picture : window.imgname,
                    url : window.url
                });
        }
    },
};
</script>