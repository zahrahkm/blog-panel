<template>
   <tbody>
   <tr>
       <td>{{ index+1 }}</td>
       <td>{{ post.postTitle }}</td>
       <td>{{post.postAuthor}}</td>

       <td>95</td>
       <td>{{post.postDate}}</td>
       <td>فعال</td>
       <td>
           <div class="op-icon">
               <a href>
                   <router-link :to="{name:'updatepost',params:{postid:post.id}}"><i class="fa fa-edit"></i></router-link>
               </a>
               <a href>
                   <i class="fa fa-remove" @click.prevent="deletePost(post)"></i>
               </a>
               <a href>
                   <router-link :to="{name:'Post',params:{postid:post.id}}"><i class="fa fa-folder-open"></i></router-link>
               </a>
           </div>
       </td>
   </tr>
   </tbody>
</template>
<script>
    export default {
        name:'SinglePost',
        props: ['post' ,'index']
    }
</script>