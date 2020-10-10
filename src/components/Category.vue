<template>
    <tbody >
    <tr>
        <td >{{ index +1 }}</td>
        <td>{{ category.categoryTitle }}</td>
        <td>{{ category.categoryUrl }}</td>
        <td>
            <div class="op-icon">

                <router-link :to="{name:'updateCategory',params:{id:category.id }}"><i class="fa fa-edit"></i></router-link>

                <a href>
                    <i class="fa fa-remove" @click.prevent="removeCat(category)"></i>

                </a>

            </div>
        </td>
    </tr>

    </tbody>
</template>


<script>
    export default {
        name:'Category',
        props: ['category' ,'index']
    }
</script>