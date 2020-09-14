<template>
    <div>
        <post-content :title="post.title" :body="post.body" />

        <button @click="toggleShowComments" v-if="!showComments">
            Show comments
        </button>

        <button @click="toggleShowComments" v-else>
            Hide comments
        </button>

        <button @click="deletePost()" >
            Delete post
        </button>

        <post-comment v-for="comment in comments" :key="comment.id" v-show="showComments" :comment="comment" />
    </div>
</template>

<script>
import PostContent from "./PostContent";
import PostComment from "./PostComment";
export default {
    name: "Post",
    props: ["post", "comments"],
    data() {
        return {
            showComments: false,
        };
    },
    methods: {
        toggleShowComments() {
            this.showComments = !this.showComments;
        },
        deletePost() {
            this.$store.commit("deletePost", this.post)
        }
    },
    components: {
        PostContent,
        PostComment
    }
};
</script>

<style></style>
