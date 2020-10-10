<template>
  <div>
    <!-- Page Heading -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          نوشته ها
          <small>نمایش تمامی نوشته ها</small>
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-dashboard"></i>
 داشبورد
          </li>
          <li class="active">
            <i class="fa fa-file-text"></i>
 نوشته ها
          </li>
        </ol>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped" v-if="!loading">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>عنوان</th>
                <th>نویسنده</th>
                <th>بازدید</th>
                <th>تاریخ انتشار</th>
                <th>وضعیت</th>
                <th>عملیات</th>
              </tr>
            </thead>

              <single-post v-for="(post,index) in posts" :key="index" :post="post" :index="index"></single-post>



          </table>
          <div v-else >
          <pulse-loader :loading="loading" ></pulse-loader>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>
<script>
import axios from 'axios'
import notification from "@/Services/Notification/notification";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import SinglePost from "../components/SinglePost";


export default {
  name: "Posts",
  components:{ PulseLoader , SinglePost },

  data(){
    return{
      posts:[],
      loading:false,
    }
  },
  methods:{
    getPosts(){
      this.loading = true;
      axios.get(`https://mypanel-b0573.firebaseio.com/posts.json`)
          .then(response=>{
            return response.data
          })
          .then((data)=>{
            let allPost=[];
            for(let keyId in data){
              data[keyId].id=keyId;
              allPost.push(data[keyId]);
              this.posts=allPost
            }
          })
          .catch((error) => console.log(error.response))
          .then(() => {
          this.loading = false;})

    },
    deletePost(post){
      axios.
      delete(`https://mypanel-b0573.firebaseio.com/posts/${post.id}.json`)
          .then(response=>{
            this.getPosts();
            response.status=notification.success('پست با موفقیت حذف گردید')
          })

          .catch((error) => console.log(error.response));
    },
  },
  created() {
    this.getPosts();
  }

};
</script>
<style>
</style>