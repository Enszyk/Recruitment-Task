<template>
    <div class="comment">
        <p>
            {{comment.name}}
        </p>
        <p>
            {{comment.email}}
        </p>
        <p>
            {{comment.body}}
        </p>
    </div>
</template>

<script>
export default {
    props: ["comment"],
    name: "PostComment",
};
</script>

<style>
    .comment {
        border: 2px solid black;
    }
</style>
