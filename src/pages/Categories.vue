<template>
  <div>
    <!-- Page Heading -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">
          دسته بندی
          <small>نمایش تمامی دسته بندی ها</small>
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-dashboard"></i>
 داشبورد
          </li>
          <li class="active">
            <i class="fa fa-tasks"></i>
 دسته بندی
          </li>
        </ol>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="table-responsive">
          <table class="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>عنوان</th>
                <th>پیوند یکتا</th>
                <th>عملیات</th>

              </tr>
            </thead>
            <category v-for="(category,index) in categories" :key="category.id" :category="category" :index="index">


            </category>
          </table>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>
<script>
import axios from "axios";
import notification from "@/Services/Notification/notification";
import Category from "../components/Category";
export default {
  name: "Categories",
    components:{ Category },
  data(){
    return{
      categories:[]
    }
  },
  methods: {
    getCategories() {
      axios
          .get(`https://mypanel-b0573.firebaseio.com/category.json`)
          .then((response) => {
            return response.data;
          })
          .then((data)=>{
            var allCategories=[];
            for(let key in data){
              data[key].id=key;
              allCategories.push(data[key])
              this.categories=allCategories;
            }
          })

          .catch((error) => console.log(error.response));
    },
    removeCat(cat) {
      axios
          .delete(`https://mypanel-b0573.firebaseio.com/category/${cat.id}.json`)
          .then((response) => {
            this.getCategories()
            response.status=notification.success('دسته با موفقیت حذف گردید')
          })

          .catch((error) => console.log(error.response));
    },

  },

  created() {
    this.getCategories();
  },

};
</script>

<style>
</style>