<template>
    <div class="signup-form">
        <form class="form-horizontal">
            <div class="row">
                <div class="col-8 offset-4">
                    <h2>فرم ثبت نام</h2>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label col-4">نام</label>
                <div class="col-8">
                    <input type="text" class="form-control" name="username" required="required" v-model="users.username" @blur="$v.users.username.$touch()">
                    <div v-if="$v.users.username.$error">
                        <span class="error" v-if="!$v.users.username.required">Field is required</span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label col-4">ایمیل</label>
                <div class="col-8">
                    <input type="email" class="form-control" name="email" required="required" v-model="users.email" @blur="$v.users.email.$touch()">
                    <div v-if="$v.users.email.$error">
                        <span class="error" v-if="!$v.users.email.required">Field is required</span>
                        <span class="error" v-if="!$v.users.email.email">Write a valid email</span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label col-4">واژه امنیتی</label>
                <div class="col-8">
                    <input type="password" class="form-control" name="password" required="required" v-model="users.password" @blur="$v.users.password.$touch()">
                    <div v-if="$v.users.password.$error">
                        <span class="error" v-if="!$v.users.password.required">Field is required</span>
                        <span class="error" v-if="!$v.users.password.minLength">password should be more than 6 characters</span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label col-4"> تکرار واژه امنیتی</label>
                <div class="col-8">
                    <input type="password" class="form-control" name="confirm_password" required="required" v-model="users.repeatPassword" @blur="$v.users.repeatPassword.$touch()">
                    <div v-if="$v.users.repeatPassword.$error">
                        <span class="error" v-if="!$v.users.repeatPassword.required">Field is required</span>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-8 offset-4">
                    <p><label class="form-check-label"><input type="checkbox" v-model="users.agree" @blur="$v.users.agree.$touch()"> تمامی <a href="#">قوانین و </a> <a href="#"> شرایط </a></label> را میپذیرم.</p>
                    <button type="submit" v-if="pageStatus" class="btn btn-primary btn-lg" @click.prevent="addUser" :disabled="$v.$invalid">ثبت نام</button>
                    <div v-else>
                        <button  id name class="btn btn-success"  :disabled="$v.$invalid" @click.prevent="editUser(userid)">ویرایش</button>
                    </div>
                </div>
            </div>
        </form>

    </div>

</template>

<script>
    import axios from "axios";
    import notification from "@/Services/Notification/notification";
    import { required,email,minLength } from 'vuelidate/lib/validators'
    export default {
        name: "SignUp",
        data() {
            return {
                users: {
                    username: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                    agree:false
                },
                userid: this.$route.params.userid,
                pageStatus:true
            }
        },
        validations: {
            users: {
                username: {
                    required
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                repeatPassword: {
                    required
                }
            }
        },

        methods: {
            addUser() {
                axios.post(`https://mypanel-b0573.firebaseio.com/users.json`, this.users)
                    .then(response => {
                        this.$v.$touch();
                        if (!this.$v.$invalid) {

                            response.status = notification.success('کاربر با موفقیت ذخیره شد')
                        }
                        this.users = ''
                    })
                    .catch(error => console.log(error.response))
            },

        getUser() {
            this.loading=true;
            axios.get(`https://mypanel-b0573.firebaseio.com/users/${this.userid}.json`)
                .then(response => {
                    this.users=(response.data);
                })
                .catch((error) => console.log(error.response))
                .then(()=>{
                    this.loading=false
                })
        },
        editUser() {
            this.loading=true;
            axios.put(`https://mypanel-b0573.firebaseio.com/users/${this.userid}.json`, this.users)
                .then(response => {
                    this.$v.$touch();
                    if (!this.$v.$invalid) {
                        response.status = notification.success('پست با موفقیت ذخیره شد')

                    }
                    this.users = ''
                })
                .catch(error => console.log(error.response = "پست ذخیره نشد!"))
                .then(()=>{
                    this.loading=false
                })
        }
        },
        created() {
            if(this.userid){
                this.pageStatus = false;
                this.getUser();
            }


        }

    }


</script>
<style>
    body {
        background: #f3f3f3;
        font-family: 'Roboto', sans-serif;
    }
    .form-control {
        border-color: #eee;
        min-height: 41px;
        box-shadow: none !important;
    }
    .form-control:focus {
        border-color: #5cd3b4;
    }
    .form-control, .btn {
        border-radius: 3px;
    }
    .signup-form {
        width: 500px;
        margin: 20px auto;
        padding: 30px 0;
    }
    .signup-form h2 {
        color: #333;
        margin: 0 0 30px 0;
        display: inline-block;
        padding: 0 30px 10px 0;
        border-bottom: 3px solid #5cd3b4;
    }
    .signup-form form {
        color: #999;
        border-radius: 3px;
        margin-bottom: 15px;
        background: #fff;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .signup-form .form-group row {
        margin-bottom: 20px;
    }
    .signup-form label {
        font-weight: normal;
        font-size: 14px;
        line-height: 2;
    }
    .signup-form input[type="checkbox"] {
        position: relative;
        top: 1px;
    }
    .signup-form .btn {
        font-size: 16px;
        font-weight: bold;
        background: #5cd3b4;
        border: none;
        margin-top: 20px;
        min-width: 140px;
    }
    .signup-form .btn:hover, .signup-form .btn:focus {
        background: #41cba9;
        outline: none !important;
    }
    .signup-form a {
        color: #5cd3b4;
        text-decoration: underline;
    }
    .signup-form a:hover {
        text-decoration: none;
    }
    .signup-form form a {
        color: #5cd3b4;
        text-decoration: none;
    }
    .signup-form form a:hover {
        text-decoration: underline;
    }
</style>