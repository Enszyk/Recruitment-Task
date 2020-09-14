<template>
    <div id="app">
        <post-app />
    </div>
</template>

<script>
import PostApp from "./components/PostApp.vue";
import axios from "axios";

export default {
    name: "App",
    components: {
        PostApp,
    },
    created() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(({ data }) => this.$store.state.posts = data);
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(({ data }) => this.$store.state.comments = data);
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
