<template>
    <div class="post">
        <post-content :post="post" :editMode="editMode" />

        <button @click="toggleShowComments" v-if="!showComments">
            Show comments
        </button>

        <button @click="toggleShowComments" v-else>
            Hide comments
        </button>

        <button @click="deletePost()">
            Delete post
        </button>

        <button @click="editPost()" v-if="!editMode">
            Edit post
        </button>

        <button @click="savePost()" v-else>
            save post
        </button>

        <post-comment
            v-for="comment in comments"
            :key="comment.id"
            v-show="showComments"
            :comment="comment"
        />
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
            editMode: false,
        };
    },
    methods: {
        toggleShowComments() {
            this.showComments = !this.showComments;
        },
        deletePost() {
            this.$store.commit("deletePost", this.post);
        },
        editPost() {
            this.editMode = !this.editMode;
        },
        savePost() {
            this.editMode = !this.editMode;

        }
    },
    components: {
        PostContent,
        PostComment,
    },
};
</script>

<style>
.post {
    margin: 20px auto;
    width: 40%;
}
</style>
