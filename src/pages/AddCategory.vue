<template>
  <div>
    <div>
      <!-- Page Heading -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            افزودن دسته بندی
            <small>نمایش افزودن دسته بندی</small>
          </h1>
          <ol class="breadcrumb">
            <li class="active">
              <i class="fa fa-dashboard"></i>
              داشبورد
            </li>
            <li class="active">
              <i class="fa fa-file-text"></i>
              افزودن دسته بندی
            </li>
          </ol>
        </div>
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col-lg-12">
          <form class="form-horizontal" >
            <fieldset >
              <!-- Form Name -->
              <div v-if="pageStatus"><legend >category</legend></div>
              <div v-else><legend>ویرایش</legend></div>


              <!-- Text input-->
              <div class="form-group">
                <label class="col-md-4 control-label">عنوان</label>
                <div class="col-md-4">
                  <input type="text" placeholder="عنوان را وارد کنید." class="form-control input-md" v-model="category.categoryTitle" @blur="$v.category.categoryTitle.$touch()">
                  <div v-if="$v.category.categoryTitle.$error">
                    <span class="error" v-if="!$v.category.categoryTitle.required">Field is required</span>
                  </div>
                </div>
              </div>



              <!-- Text input-->
              <div class="form-group">
                <label class="col-md-4 control-label" for>آدرس یکتا</label>
                <div class="col-md-4">
                  <input name type="text" placeholder="آدرس یکتا  را وارد کنید." class="form-control input-md" v-model="category.categoryUrl" @blur="$v.category.categoryUrl.$touch()">
                  <div v-if="$v.category.categoryUrl.$error">
                     <span class="error" v-if="!$v.category.categoryUrl.required">Field is required</span>
                  </div>
                </div>
              </div>


              <!-- Button -->
              <div class="form-group">
                <label class="col-md-4 control-label" for></label>
                <div class="col-md-4" v-if="pageStatus" >
                  <button  type="submit" class="btn btn-success" :disabled="$v.$invalid" @click.prevent="storeCategory">افزودن</button>
                </div>
                <div v-else>
                  <button  type="submit" class="btn btn-success" :disabled="$v.$invalid" @click.prevent="editCategory(catid)">ویرایش</button>
                </div>
              </div>
            </fieldset>

          </form>
        </div>
      </div>
      <!-- /.row -->
    </div>

  </div>
</template>


<script>
import axios from 'axios';
import notification from "@/Services/Notification/notification";
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      errors: [],
      category: {
        categoryTitle: '',
        categoryUrl: '',
      },
      catid: this.$route.params.id,
      pageStatus: true,


    }
  },
  validations: {
    category: {
      categoryTitle: {
        required
      },
      categoryUrl: {
        required
      }
    },
  },


  methods: {
    storeCategory() {
      axios.post('https://mypanel-b0573.firebaseio.com/category.json', this.category)
          .then(response => {
            this.$v.$touch();
            if(!this.$v.$invalid){
              response.status=notification.success('دسته با موفقیت ذخیره شد')
              this.$router.replace('Categories')

            }
            this.category=''

          })

          .catch(error => console.log(error.response = "دسته ذخیره نشد!"))

    },
    getCategory(id){
      axios.get(`https://mypanel-b0573.firebaseio.com/category/${id}.json`)
      .then(response=>{ this.category=(response.data);})
          .catch((error) => console.log(error.response));
    },
    editCategory(){
      axios.put(`https://mypanel-b0573.firebaseio.com/category/${this.catid}.json`, this.category)
          .then(response => {
            this.$router.replace('/Categories')
            this.$v.$touch();
            if(!this.$v.$invalid){
              response.status=notification.success('دسته با موفقیت ذخیره شد')

            }

            this.category=''
          })
          .catch(error => console.log(error.response = "دسته ذخیره نشد!"))
    },


  },
  created() {
    if (this.catid) {
      this.pageStatus=false;
      this.getCategory(this.catid);
    }
  }
}
</script>

<style>
.error{
  color: rgb(236,79,79);
}
</style>