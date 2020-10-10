<template>
  <div>
    <!-- Page Heading -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          داشبورد <small>مدیریت سایت</small>
        </h1>
      </div>
      <h2>پست های اخیر</h2>
      <recent-post v-for="post in posts" :key="post.postDate" :post="post">
      </recent-post>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import RecentPost from "./RecentPost";

export default {
  name:'dashboard',
components:{ RecentPost },
  data(){
    return{
      posts:[]
    }
  },
  methods:{


      getAllPosts(){
        axios.get(`https://mypanel-b0573.firebaseio.com/posts.json?orderBy="$key"&limitToLast=6`)
            .then(response=>{
              return (response.data)
            })
            .then((data)=>{
              let allPost=[];
              for(let keyId in data){
                data[keyId].id=keyId;
                allPost.push(data[keyId]);
                this.posts=allPost
              }
            })
      }


  }, created(){
    this.getAllPosts()
  }
}
</script>
