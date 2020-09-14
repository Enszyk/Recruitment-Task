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
            <h1>
                {{ post.title }}
            </h1>
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
            <p>
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
