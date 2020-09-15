<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <div class="form-group" v-if="editMode">
                <textarea
                    type="text"
                    class="form-control form-title"
                    v-model.lazy="post.title"
                />
            </div>

            <h2 class="card-header" v-else>
                {{ post.title }}
            </h2>
        </transition>

        <transition name="fade" mode="out-in" appear>
            <div class="form-group" v-if="editMode">
                <textarea
                    type="text"
                    class="form-control"
                    v-model.lazy="post.body"
                />
            </div>
            
            <p class="card-body" v-else>
                {{ post.body }}
            </p>
        </transition>
    </div>
</template>

<script>
export default {
    props: ["post", "editMode"],
    name: "PostContent",
};
</script>

<style>
.form-control {
    height: 130px !important;
}
.form-title {
    font-size: 2rem;
}
</style>
