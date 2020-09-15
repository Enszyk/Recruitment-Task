<template>
    <transition name="fade" mode="out-in" appear>
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
                <transition-group name="list" mode="out-in">
                    <post-comment
                        v-for="comment in comments"
                        :key="comment.id"
                        v-show="showComments"
                        :comment="comment"
                    />
                </transition-group>
            </div>
        </div>
    </transition>
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
            updateInfo: false,
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
            this.editPost()
            this.$store.commit("updatePost", [
                this.post.id,
                this.post.title,
                this.post.body,
            ]);
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
    width: 500px;

    &__buttons__container {
        margin: 0 auto;
        width: 70%;
        display: flex;
        justify-content: space-around;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.list-enter-active, 
.list-leave-active {
  transition: all 0.7s ease-in-out;
}
.list-enter, 
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
