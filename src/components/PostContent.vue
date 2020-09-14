<template>
    <div>
        <template v-if="editMode">
            <div class="form-group">
                <textarea
                    type="text"
                    class="form-control form-title"
                    v-model.lazy="post.title"
                />
            </div>
        </template>

        <template v-else>
            <h2 class="card-header">
                {{ post.title }}
            </h2>
        </template>

        <template v-if="editMode">
            <div class="form-group">
                <textarea
                    type="text"
                    class="form-control"
                    v-model.lazy="post.body"
                />
            </div>
        </template>

        <template v-else>
            <p class="card-body">
                {{ post.body }}
            </p>
        </template>
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
    height: 125px!important;
}
.form-title {
    font-size: 2rem;
}
</style>
