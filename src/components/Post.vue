<template>
    <div class="post">
        <post-content :post="post" :editMode="editMode" />

        <div class="post__buttons__container">
            <button type="button" class="btn btn-primary btn-md" @click="toggleShowComments" v-if="!showComments">
                Show comments
            </button>

            <button type="button" class="btn btn-primary btn-md" @click="toggleShowComments" v-else>
                Hide comments
            </button>

            <button type="button" class="btn btn-primary btn-md" @click="deletePost()">
                Delete post
            </button>

            <button type="button" class="btn btn-primary btn-md" @click="editPost()" v-if="!editMode">
                Edit post
            </button>

            <button type="button" class="btn btn-primary btn-md" @click="savePost()" v-else>
                save post
            </button>

        </div>
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
        },
    },
    components: {
        PostContent,
        PostComment,
    },
};
</script>

<style lang="scss">
.post {
    margin: 20px auto;
    width: 40%;

    &__buttons__container {
        margin: 0 auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
    }
}


</style>
