<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Upload Image</div>
          <div class="card-body">
              <div>
              
            <el-input type="file" id="myfile" name="myfile" @select="showButton()"></el-input>
            </div>
            
          </div>
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
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  method: {
    showButton()
    {
      this.flag=true
    },
  },
};
</script>