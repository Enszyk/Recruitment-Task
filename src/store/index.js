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
        updatePost(state, payload) {
            const { id, title, body } = payload
            Vue.set(state.posts, id, title)
            Vue.set(state.posts, id, body)
        }
    },
    actions: {
    }
})
