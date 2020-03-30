<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!
              <div>
              
                  <el-button @click="$router.push('/Upload')" class="navbar-brand">upload</el-button>
                  <el-button @click="$router.push('/Gridview')" class="navbar-brand">View Images</el-button>
            </div>
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
    };
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