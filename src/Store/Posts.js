import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '../Routes';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [
               {id: 1, lastPosted: 110418, author: 'Hecton', title: 'How to hide a body', content: "Hiding a body using whitewash, small backyard and shovel it's easy...."},
               {id: 2, lastPosted: 90619, author: 'Dimitri', title: 'How to speak 3 languages', content: "Learning languages is fun, you just need commitment..."},
               {id: 3, lastPosted: 100619, author: 'Hecton', title: 'How to jump', content: "First of all... Do you have legs?"},
              
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
        deletePost (state, payload) {
         var filtered = state.posts.filter(function(el) { return el.id != payload; });       
         state.posts = filtered;
    
      
        
        }
    },
    actions: {
        addPost (context) {
            context.commit('addPost');
        },
        deletePost (context) {
            context.commit('deletePost');
        }
    }
});