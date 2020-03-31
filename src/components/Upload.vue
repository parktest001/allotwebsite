<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <center>
        <div class="card">
          <div v-if="loader" class="loader"></div>
          <div v-else class="card-header"><h1>Upload Image</h1></div>
          <div class="card-body" style=" width:1200px;border: 2px solid #5A487A;border-right: 8px solid #5A487A;border-left: 8px solid #5A487A;">
              <div>
              <div>    
            <div style="padding: 14px;">
              <div><h4>Enter Image Description:</h4></div>
                <el-input placeholder="Please don't forget to describe the your photo before uploading !!!! (စ‿စ ) (⪴╰╯⪳) " style="width:1000px;border: 2px solid #5A487A" maxlength="100" v-model="description"></el-input>
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
        loader:false,
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
      if(document.querySelector('#myfile').files[0] ){
                this.loader=true
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
                    self.loader=false
                    window.url=url
                    document.getElementById('uploadedimg').src = url;
                    self.source=url
                    self.saveMeta()
                    self.$message({
                    message: 'Image Uploaded Successfully',
                    type: 'success'
                  });
                })




      }
      else{
        this.$message({
                    message: 'No photo selected. Please select atleast one photo',
                    type: 'error'
                  });
      }   
        },
        saveMeta()
        {
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
<style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>