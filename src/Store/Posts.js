import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [
               {id: 1, lastPosted: 110418, author: 'Hecton', title: 'How to hide a body', content: "Hiding a body using whitewash, small backyard and shovel it's easy...."},
               ]
    },
    getters: {
        getAllPosts: state => {
            return state.posts;
        }    
    },
    mutations: { 
        addPost (state, payload) {
            state.posts.push(payload);
        }
    },
    actions: {
        addPost (context) {
            context.commit('addPost');
        }
    }
});