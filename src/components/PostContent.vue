<template>
    <div class="post">
        <h1>
            {{ title }}
        </h1>
        <p>
            {{ body }}
        </p>
    </div>
  
</template>

<script>
export default {
    props: ["body","title"],
    name: "PostContent"
}
</script>

<style>
.post {
    margin: 0 auto;
    width: 40%;
}
</style>