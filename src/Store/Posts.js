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
        },
        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
          },
   

    },
    mutations: { 
        addPost (state, payload) {
            state.posts.push(payload);
        },
        deletePost: (state) => id => {
         var newPosts = state.posts.find(post => post.id != id)
         state.posts.push(newPosts);
        }
    },
    actions: {
        addPost (context) {
            context.commit('addPost');
        },

        /*
            we can use splice to remove the obj from the array
            but it will be needed to pass the index, but it will require
            change many parts in the code.

            the second solution could be pass the posts.id to find the index.
            so we can use the splice
        */
        deletePost (context) {
            context.commit('deletePost');
        }
    }
});