<template>
    <div class="text-center">
    <form class="form-signin" >
        <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal">لطفا وارد شوید</h1>
        <label for="inputEmail" class="sr-only">ایمیل </label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">واژه امنیتی</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" class="checkbox">مرا به خاطر بسپار!
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">ورود</button>

    </form>
    </div>


</template>

<script>
    export default {
        name:"Login"
    }
</script>

<style>
    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 50px auto;
    }
    .checkbox{
        margin-right: -20px!important;
    }
</style>

