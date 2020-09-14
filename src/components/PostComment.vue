<template>
    <div class="card border-dark">
        <div class="card-body">
            <h5 class="card-header">
                Name: {{ comment.name }}
            </h5>
            <p class="card-body">
                {{ comment.body }}
            </p>
            <p class="card-body">
                {{ comment.email }}
            </p>
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
.card-body, .card-header {
    padding: 10px;
}
</style>
