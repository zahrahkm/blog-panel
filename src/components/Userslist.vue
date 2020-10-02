<template>
    <div>
        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    کاربران
                    <small> نمایش تمامی کاربر ها</small>
                </h1>
                <ol class="breadcrumb">
                    <li class="active">
                        <i class="fa fa-dashboard"></i> داشبورد

                    </li>
                    <li class="active">
                        <i class="fa  fa-file-text"></i> کاربر ها

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
                            <th>نام</th>
                            <th>ایمیل</th>
                            <th>نوشته ها</th>
                            <th>عملیات</th>
                        </tr>
                        </thead>
                        <tbody v-for="(user,index) in users" :key="user.id">
                        <tr>
                            <td>{{index +1}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.email}}</td>
                            <td>فعال</td>
                            <td>
                                <div class="op-icon">
                                    <router-link :to="{name:'updateUser',params:{userid:user.id}}"><i class="fa fa-edit"></i></router-link>
                                    <a href=""><i class="fa fa-remove" @click.prevent="removeUser(user)"></i></a>
                                    <router-link :to="{name:'User',params:{userid:user.id}}"><i class="fa fa-folder-open"></i></router-link>
                                </div>
                            </td>
                        </tr>
                        </tbody>
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
    import axios from "axios";
    import notification from "@/Services/Notification/notification";
    import PulseLoader from "vue-spinner/src/PulseLoader";

    export default {
        name:'Userslist',
        components:{ PulseLoader},
        data(){
            return{
                users:[],
                loading:false
            }
        },
        methods: {
            getUsers() {
                this.loading=true;
                axios
                    .get(`https://mypanel-b0573.firebaseio.com/users.json`)
                    .then((response) => {
                        return response.data;
                    })
                    .then((data) => {
                        var allUsers = [];
                        for (let key in data) {
                            data[key].id = key;
                            allUsers.push(data[key])
                            this.users = allUsers;
                        }
                    })
                    .catch((error) => console.log(error.response))
                    .then(() => {
                        this.loading = false;})
            },
            removeUser(user) {
                axios
                    .delete(`https://mypanel-b0573.firebaseio.com/users/${user.id}.json`)
                    .then((response) => {
                        this.getUsers()
                        response.status=notification.success('کاربر با موفقیت حذف گردید')
                    })

                    .catch((error) => console.log(error.response))

            }


        },
        created() {
            this.getUsers();
        }
    }
</script>