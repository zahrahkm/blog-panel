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
                    <table class="table table-bordered table-hover table-striped">
                        <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>نام</th>
                            <th>ایمیل</th>
                            <th>نوشته ها</th>
                            <th>تاریخ انتشار</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>9</td>
                            <td>اموزش ویو</td>
                            <td>محمد نجاری</td>
                            <td>95</td>
                            <td>12 بهمن 1396</td>
                            <td>فعال</td>
                            <td>
                                <div class="op-icon">
                                    <a href=""><i class="fa fa-edit"></i></a>
                                    <a href=""><i class="fa fa-remove"></i></a>
                                    <a href=""><i class="fa fa-folder-open"></i></a>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
</template>
<script>
    export default {
        name:'Userslist'
    }
</script>