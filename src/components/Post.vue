<template>
    <div>
        <h1>
        {{post.id}}
        </h1>
        <li v-for="comment in comments" :key="comment.id">
            {{comment.name}}
        </li>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post", "comments"],
    methods: {
        comment(){
            console.log(1);
        }
    }
    
}
</script>

<style>

</style>