import Mainlayout from '@/layouts/Mainlayout'
import AddCategory from "@/components/AddCategory";
import AddPost from "@/components/AddPost";
import Categories from "@/components/Categories";
import Dashboard from "@/components/Dashboard";
import Posts from "@/components/Posts";
import Post from "@/components/Post";
import Userslist from "@/components/Userslist";
import Signup from "@/components/Signup";
import Login from "@/components/Login";



export default [{
    path:'/',
    component:Mainlayout,
    redirect:'/dashboard',
    children:[
        {path:'dashboard',name:'dashboard',component:Dashboard },
        {path:'Posts',name:'Posts',component:Posts },
        {path:"Posts/post/:postid",name:'Post',component:Post},
        {path:'AddPost',name:'AddPost',component:AddPost },
        {path:'AddPost/updatePost/:postid',name:'updatepost',component:AddPost},
        {path:'categories',name:'Categories',component:Categories },
        {path:'AddCategory',name:'AddCategory',component:AddCategory },
        {path:'updateCategory/:id',name:'updateCategory',component:AddCategory },
        {path:'userslist',name:'Userslist',component:Userslist },
        {path:'SignUp',name:'SignUp',component:Signup },
        {path:'/SignUp/:userid',name:'updateUser',component:Signup},
        {path:'Login',name:'Login',component:Login },
    ]
}]

