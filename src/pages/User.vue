<template>
    <div class="col-lg-4 form" style="margin-top: 50px" >
        <div class="profile-card-4 z-depth-3" >
            <div class="card">
                <div class="card-body text-center bg-primary rounded-top">
                    <div class="user-box">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user avatar">
                    </div>
                    <h5 class="mb-1 text-white">{{currentUser}}</h5>
                    <h6 class="text-light">UI/UX Engineer</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group shadow-none">
                        <li class="list-group-item">
                            <div class="list-icon">
                                <i class="fa fa-phone-square"></i>
                            </div>
                            <div class="list-details">
                                <span>9910XXXXXX</span>
                                <small>Mobile Number</small>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="list-icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="list-details">
                                <span>{{currentUser}}</span>
                                <br>
                                <small>Email Address</small>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="list-icon">
                                <i class="fa fa-globe"></i>
                            </div>
                            <div class="list-details">
                                <span>www.example.com</span>
                                <small>Website Address</small>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import * as firebase from "firebase";

    export default {
        name:'User',
        data(){
            return{
                currentUser:false
            }
        },
        created() {

            firebase.auth().onAuthStateChanged(user=>{
                this.currentUser=firebase.auth().currentUser.email;
                this.loggedIn=!!user;
                //if(user){
                // this.loggedIn=true;
                // }else{
                //   this.loggedIn=false;
                //}
            })
        }

    }
</script>

<style>
    .form {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 50px auto;
    }
    .bg-primary {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    .card .tab-content{
        padding: 1rem 0 0 0;
    }

    .card-body{
        padding: 10px;
    }

    .z-depth-3 {
        -webkit-box-shadow: 0 11px 7px 0 rgba(0,0,0,0.19),0 13px 25px 0 rgba(0,0,0,0.3);
        box-shadow: 0 11px 7px 0 rgba(0,0,0,0.19),0 13px 25px 0 rgba(0,0,0,0.3);
    }
    body{
        margin-top:20px;
    }
    /* User Cards */
    .user-box {
        width: 110px;
        margin: auto;
        margin-bottom: 20px;

    }

    .user-box img {
        width: 100%;
        border-radius: 50%;
        padding: 3px;
        background: #fff;
        -webkit-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
        -ms-box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    }


</style>