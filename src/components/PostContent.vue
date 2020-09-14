<template>
    <div>
        <template v-if="editMode">
            <div class="form-group">
                <textarea type="text" class="title__input" v-model.lazy="post.title" />
            </div>
        </template>

        <template v-else>
            <h1>
                {{ post.title }}
            </h1>
        </template>

        <template v-if="editMode">
            <div class="form-group">
                <textarea type="text" class="title__body" v-model.lazy="post.body" />
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

textarea {
    padding: 10px;
}

.title__input {
    width: 100%;
    height: 50px;
}
.title__body {
    width: 100%;
    height: 100px;
}
</style>
