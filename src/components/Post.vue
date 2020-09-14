<template>
    <!-- <div class="card border-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body text-dark">
    <h5 class="card-title">Dark card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> -->

    <div class="post card border-primary">
        <div class="card-body">
            <post-content :post="post" :editMode="editMode" />

            <div class="post__buttons__container">
                <button
                    type="button"
                    class="btn btn-primary btn-md"
                    @click="toggleShowComments"
                    v-if="!showComments"
                >
                    Show comments
                </button>

                <button
                    type="button"
                    class="btn btn-primary btn-md"
                    @click="toggleShowComments"
                    v-else
                >
                    Hide comments
                </button>

                <button
                    type="button"
                    class="btn btn-primary btn-md"
                    @click="deletePost()"
                >
                    Delete post
                </button>

                <button
                    type="button"
                    class="btn btn-primary btn-md"
                    @click="editPost()"
                    v-if="!editMode"
                >
                    Edit post
                </button>

                <button
                    type="button"
                    class="btn btn-primary btn-md"
                    @click="savePost()"
                    v-else
                >
                    Save post
                </button>
            </div>
            <post-comment
                v-for="comment in comments"
                :key="comment.id"
                v-show="showComments"
                :comment="comment"
            />
        </div>
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
            updateInfo: false
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
            this.$store.commit("updatePost", [this.post.id, this.post.title, this.post.body])
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
    width: 700px;

    &__buttons__container {
        margin: 0 auto;
        width: 70%;
        display: flex;
        justify-content: space-around;
    }
}
</style>
