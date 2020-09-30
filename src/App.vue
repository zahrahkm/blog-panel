<template>
  <div id="app">
    <div>

      <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">Vue JS | 7Learn</a>
          </div>
          <!-- Top Menu Items -->
          <ul class="nav navbar-right top-nav">

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-users" ></i> نام مدیر <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#"><i class="fa fa-fw fa-user"></i> پروفایل</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-fw fa-envelope"></i> صندوق ورودی</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-fw fa-gear"></i> تنظیمات</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#"><i class="fa fa-fw fa-power-off"></i> خروج</a>
                </li>
              </ul>
            </li>
          </ul>
          <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
          <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav side-nav">
              <li>
                <router-link :to="{name:'Dashboard'}"><i class="fa fa-fw fa-dashboard"></i>داشبورد</router-link>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#users"><i class="fa fa-fw fa-users"></i> کاربران <i class="fa fa-fw fa-caret-down"></i></a>
                <ul id="users" class="collapse">
                  <li>
                    <router-link :to="{name:'Userslist'}">لیست کاربرها</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'SignUp'}">افزودن کاربر</router-link>

                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#posts"><i class="fa fa-fw fa-file-text"></i> نوشته ها <i class="fa fa-fw fa-caret-down"></i></a>
                <ul id="posts" class="collapse">
                  <li>
                    <router-link :to="{name:'Posts'}">لیست نوشته ها</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'AddPost'}">افزودن نوشته</router-link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#categories"><i class="fa fa-fw fa-tasks"></i> دسته بندی <i class="fa fa-fw fa-caret-down"></i></a>
                <ul id="categories" class="collapse">
                  <li>
                    <router-link :to="{name:'Categories'}">لیست دسته بندی ها</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'AddCategory'}">افزودن دسته بندی</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

          <div class="container-fluid">


            <!-- /.row -->
            <router-view></router-view>

          </div>
          <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->

      </div>
      <!-- /#wrapper -->
    </div>


  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.13.0/css/all.css')

</style>
