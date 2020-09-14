import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        posts: [],
        comments: [],
    },
    mutations: {
        deletePost(state, payload) {
            state.posts = state.posts.filter((value) => value !== payload)
        },
    },
    actions: {
    }
})
