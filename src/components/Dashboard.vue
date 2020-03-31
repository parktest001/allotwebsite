<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <center>
          <div class="card-header"><h1>Dashboard</h1></div>
          <img src="../assets/caution.png" style="width:50px;height:50px;border:2px solid #5A487A;" /><br><br>
          <div><p>!! All images uploaded will be open to public and any user of this app can view your photos or download to their devices</p></div><br>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">
              <div>
              
                  <el-button style="width:300px;height:50px;border:2px solid #5A487A" @click="$router.push('/Upload')" class="navbar-brand"><span style="font-size:25px;">Upload Image Public</span></el-button><br><br><br><br>
                  <el-button style="width:300px;height:50px;border:2px solid #5A487A;" @click="$router.push('/Gridview')" class="navbar-brand"><span style="font-size:25px;">View Public Images</span></el-button>
            </div>
            </div>
            
          </div>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      flag: true
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  mounted()
  {
    
  },
  method: {
    showButton()
    {
      this.flag=true
    },
  },
};
</script>