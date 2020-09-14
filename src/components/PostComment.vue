<template>
    <div class="card border-dark">
        <div class="card-body">
            <h5 class="card-header">Name: {{ comment.name }}</h5>
            <div class="card-body">
                <p>{{ comment.body }}</p>
                <p class="m-0">{{ comment.email }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["comment"],
    name: "PostComment",
};
</script>

<style>
.card {
    margin-top: 10px;
}
</style>
