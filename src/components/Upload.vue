<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <center>
        <div class="card">
          <div class="card-header"><h1>Upload Image</h1></div>
          <div class="card-body">
              <div>
              <div>    
            <div style="padding: 14px;">
              <div><h4>Enter Image Description:</h4></div>
                <el-input style="width:1000px;border: 2px solid #5A487A" maxlength="100" v-model="description"></el-input>
                <div class="bottom clearfix">
                <div type="text" class="button"><h4>Image</h4></div>
                </div>
            </div>
              </div>
            <center><input  style="padding-left:80px" type="file" id="myfile" name="myfile" @select="showButton()"/></center><br><br><br>
            <el-button style="border: 2px solid #5A487A" @click="uploadSingleImage()">Upload single image to public</el-button><br><br><br>
            <div><h4>Uploaded Image</h4></div>
            <img  src="../assets/no.png" style="width:800px;border: 10px solid #5A487A" id="uploadedimg" />
            </div>
          </div>
        </div>
        </center>
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
                    self.$message({
                    message: 'Image Uploaded Successfully',
                    type: 'success'
                  });
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