<template>
    <div>
        <post
            v-for="post in posts"
            :post="post"
            :key="post.id"
            :comments="postComments(post.id)"
        />
    </div>
</template>

<script>
import Post from "./Post";

export default {
    name: "PostApp",
    components: {
        Post,
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
        comments() {
            return this.$store.state.comments;
        },
    },
    methods: {
        postComments(id) {
            let comments = [];
            for (const comment of this.comments) {
                if (comment.postId === id) 
                comments.push(comment);
            }
            return comments;
        },
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
