
import AddCategory from "@/pages/AddCategory";
import AddPost from "@/pages/AddPost";
import Categories from "@/pages/Categories";
import Dashboard from "@/components/Dashboard";
import Posts from "@/pages/Posts";
import Post from "@/pages/Post";
import Userslist from "@/pages/Userslist";
import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import User from "@/pages/User";



export default [


        {path:'/dashboard',name:'dashboard',component:Dashboard ,meta:{requiresAuth:true}},
        {path:'/Posts',name:'Posts',component:Posts ,meta:{requiresAuth:true}},
        {path:"/Posts/post/:postid",name:'Post',component:Post,meta:{requiresAuth:true}},
        {path:'/AddPost',name:'AddPost',component:AddPost ,meta:{requiresAuth:true}},
        {path:'/AddPost/updatePost/:postid',name:'updatepost',component:AddPost,meta:{requiresAuth:true}},
        {path:'/categories',name:'Categories',component:Categories ,meta:{requiresAuth:true}},
        {path:'/AddCategory',name:'AddCategory',component:AddCategory ,meta:{requiresAuth:true}},
        {path:'/updateCategory/:id',name:'updateCategory',component:AddCategory ,meta:{requiresAuth:true}},
        {path:'/userslist',name:'Userslist',component:Userslist ,meta:{requiresAuth:true}},
        {path:'/SignUp',name:'SignUp',component:Signup ,meta:{requiresAuth:true}},
        {path:'/SignUp/:userid',name:'updateUser',component:Signup,meta:{requiresAuth:true}},
        {path: '/User',name:'User',component: User,meta:{requiresAuth:true}},
        {path:'/Login',name:'Login',component:Login }

]

