<template>


    <div class="col-lg-4">
        <!-- Card -->
        <div class="card promoting-card">
            <!-- Card content -->
            <div class="card-body d-flex flex-row">
                <!-- Avatar -->
                <img src="../../src/assets/image.jpg" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar">
                <!-- Content -->
                <div>
                    <!-- Title -->
                    <h4 class="card-title font-weight-bold mb-2">{{ post.postAuthor}}</h4>
                    <!-- Subtitle -->
                    <p class="card-text">
                        <i class="far fa-clock pr-2">{{post.postDate}} </i>
                        <router-link :to="{name:'Post',params:{postid:post.id}}" style="margin-right: 20px;font-size: 25px;">{{ post.postTitle}}</router-link>
                    </p>
                </div>

            </div>

            <!-- Card image -->
            <div class="view overlay">
                <img class="card-img-top rounded-0" :src="post.postImage" alt="Card image cap" style="margin: auto;height: 250px!important;">
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <!-- Card content -->
            <div class="card-body">

                <div class="collapse-content">

                    <!-- Text -->
                    <p class="card-text collapse" id="collapseContent">{{ post.postTitle}}</p>
                    <!-- Button -->
                    <a class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent"></a>
                    <i class="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></i>
                    <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>

                </div>

            </div>

        </div>
    </div>
</template>


<script>
    export default {
        name:'RecentPosts',
        props: ['post']
    }
</script>

<style>
    .card {
        font-weight: 400;
        border: 0;
        -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    }
    .card-body {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-radius: 0 !important;
    }
    .mr-3, .mx-3 {
        margin-right: 1rem !important;
    }
    .rounded-circle {
        border-radius: 50% !important;
    }
    .view img, .view video {
        position: relative;
        display: block;
    }
    .view {
        position: relative;
        overflow: hidden;
        cursor: default;
    }
    .collapse-content .fa.fa-heart:hover {
        color: #f44336 !important;
    }
    .collapse-content .fa.fa-share-alt:hover {
        color: #0d47a1 !important;
    }
</style>