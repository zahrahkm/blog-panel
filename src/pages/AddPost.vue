<template>
  <div>
    <!-- Page Heading -->
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header" v-if="pageStatus">
          افزودن نوشته
          <small>نمایش افزودن نوشته</small>
        </h1>
        <h1 class="page-header" v-else>
          ویرایش نوشته
          <small>نمایش ویرایش نوشته</small>
        </h1>
        <ol class="breadcrumb">
          <li class="active">
            <i class="fa fa-dashboard"></i> داشبورد
          </li>
          <li class="active" v-if="pageStatus">
            <i class="fa fa-file-text"></i> افزودن نوشته
          </li>
          <li class="active" v-else>
            <i class="fa fa-file-text"></i> ویرایش نوشته
          </li>
        </ol>
      </div>
    </div>
    <!-- /.row -->

    <div class="row" v-if="!loading">
      <div class="col-lg-12">
        <form class="form-horizontal">
          <fieldset>
            <!-- Form Name -->
            <legend>post</legend>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for>عنوان</label>
              <div class="col-md-4">
                <input type="text" placeholder="عنوان را وارد کنید." class="form-control input-md" v-model="addpost.postTitle" @blur="$v.addpost.postTitle.$touch()"/>
                <div v-if="$v.addpost.postTitle.$error">
                  <span class="error" v-if="!$v.addpost.postTitle.required">Field is required</span>
                </div>
              </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
              <label class="col-md-4 control-label" for>آدرس یکتا</label>
              <div class="col-md-4">
                <input type="text" placeholder="آدرس یکتا  را وارد کنید." class="form-control input-md" v-model="addpost.postUrl" @blur="$v.addpost.postUrl.$touch()"/>
                <div v-if="$v.addpost.postUrl.$error">
                  <span class="error" v-if="!$v.addpost.postUrl.required">Field is required</span>
                </div>
              </div>
            </div>

            <!-- File Button -->
            <div class="form-group">
              <label class="col-md-4 control-label" for>تصویر</label>
              <div class="col-md-4">
                <input id name class="input-file" type="file" accept="image/jpeg" @change="uploadImage"/>
                <img :src="addpost.postImage"  style="height: 100px!important;"/>
              </div>
            </div>

            <!-- Textarea -->
            <div class="form-group">
              <label class="col-md-4 control-label" for>متن</label>
              <div class="col-md-4">
                <textarea class="form-control" v-model="addpost.postText" @blur="$v.addpost.postText.$touch()">محتوای خود را وارد کنید.</textarea>

                <div v-if="$v.addpost.postText.$error">
                  <span class="error" v-if="!$v.addpost.postText.required">Field is required</span>
                </div>
              </div>
            </div>

            <!-- Select Basic -->
            <div class="form-group">
              <label class="col-md-4 control-label" for>دسته بندی</label>
              <div class="col-md-4">
                <select id name class="form-control" v-model="addpost.postCategory" >
                  <option v-for="postCat of postCategory" :key="postCat.id">{{ postCat.categoryTitle }}</option>

                </select>
              </div>
            </div>

            <!-- Multiple Radios (inline) -->
            <div class="form-group">
              <label class="col-md-4 control-label" >وضعیت</label>
              <div class="col-md-4">
                <label class="radio-inline" for="status-0">
                  <input type="radio" name="status" id="status-0" value="فعال" checked="checked" v-model="addpost.postStatus"/>
                  فعال
                </label>
                <label class="radio-inline" for="status-1">
                  <input type="radio" name="status" id="status-1" value="غیرفعال" v-model="addpost.postStatus"/>
                  غیر فعال
                </label>
              </div>
            </div>

            <!-- Author -->
            <div class="form-group">
              <label class="col-md-4 control-label" for>نویسنده</label>
              <div class="col-md-4">
                <select id name class="form-control" v-model="addpost.postAuthor" @blur="$v.postAuthor.$touch()">
                  <option v-for="author in postAuthor" :key="author" >{{ author }}</option>
                  <div v-if="$v.addpost.postText.$error">
                    <span class="error" v-if="!$v.postAuthor.required">Field is required</span>
                  </div>

                </select>
              </div>
            </div>

            <!-- Button -->
            <div class="form-group">
              <label class="col-md-4 control-label" for></label>
              <div class="col-md-4">
                <div v-if="pageStatus">

                  <router-link :to="{name:'Posts'}" v-if="!this.$v.$invalid">
                  <button id name class="btn btn-success" :disabled="$v.$invalid" @click.prevent="storePost">
                    افزودن
                  </button>
                  </router-link>

                </div>
                <button v-else id name class="btn btn-success"  :disabled="$v.$invalid" @click.prevent="editPost(postid)">ویرایش</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
    <div v-else style="margin-top: 15%;margin-right: 45%">
      <sync-loader :loading="loading" ></sync-loader>
    </div>
    <!-- /.row -->
  </div>
</template>
<script>


import axios from "axios";
import notification from "@/Services/Notification/notification";
import { required } from 'vuelidate/lib/validators';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
  name: "addPost",
  components:{ SyncLoader },
  data() {
    return {

      addpost: {
        postTitle: "",
        postUrl: "",
        postImage: "",
        postText: "",
        postStatus: "",
        postDate: ""

      },
      postCategory: [],
      postAuthor: ['زهرا حکیمی', 'مهسا پیروی', 'علی کریمی', 'مهدی محبی', 'وحید امیری'],
      postid: this.$route.params.postid,
      pageStatus: true,
      loading:false



    };
  },
  validations: {
    addpost: {
      postTitle: {
        required
      },
      postUrl: {
        required
      },
      postText: {
        required
      },
    },
    postAuthor: {
      required
    }
  },
  methods: {
    storePost() {
      axios.post('https://mypanel-b0573.firebaseio.com/posts.json', this.addpost)
          .then(response => {
            this.$v.$touch();
            if (!this.$v.$invalid) {
              response.status = notification.success('پست با موفقیت ذخیره شد')
              this.$router.replace('/Posts')
              this.addpost = '';
            }
          })
          .catch(error => console.log(error.response = "پست ذخیره نشد!"))
    },
    getPost(id) {
      this.loading=true;
      axios.get(`https://mypanel-b0573.firebaseio.com/posts/${id}.json`)
          .then(response => {
            this.addpost=(response.data);
          })
          .catch((error) => console.log(error.response))
              .then(()=>{
        this.loading=false
      })
    },
    editPost() {
      this.loading=true;
      axios.put(`https://mypanel-b0573.firebaseio.com/posts/${this.postid}.json`, this.addpost)
          .then(response => {
            this.$v.$touch();
            if (!this.$v.$invalid) {
              response.status = notification.success('پست با موفقیت ذخیره شد')
              this.$router.replace('/Posts')

            }
            this.addpost = ''
          })
          .catch(error => console.log(error.response = "پست ذخیره نشد!"))
              .then(()=>{
                this.loading=false
              })
    },
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
                  this.postCategory=allCategories;
                }
              })

              .catch((error) => console.log(error.response));
    },


    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.addpost.postImage = e.target.result;
        console.log(this.addpost.postImage);
      };
    },
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      this.addpost.postDate = date;
    }

  },
  created() {
    if(this.postid){
      this.pageStatus = false;
      this.getPost(this.postid);
    }
    setInterval(this.getNow, 1000);
    this.getCategories();

  }
}
</script>
<style>
  .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) ,{
    text-align: right!important;
  }
</style>