import ContentPage from './Components/ContentPage.vue';
import CreatePost from './Components/CreatePost.vue';
import NotFound from './Components/NotFound.vue';
import FullPage from './Components/FullPost.vue';


export const routes = [
 {path: '', component: ContentPage},
 {path: '/create', component: CreatePost},
 {path: '/post/:id', component: FullPage},
 {path: '*', component: NotFound},

];