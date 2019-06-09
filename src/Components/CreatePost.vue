<template>
    <div class="container">

        <div>
             <form  @submit="addPost">
                <h2>Title</h2>
                <input type="text" class="form-control" v-model="newPost.title" >
                <span v-if="this.error.title"  style="color: red;">{{this.error.title}}</span>
                 <br>
                <h2>Post</h2>
                <textarea name="content" id="content"  class="form-control" v-model="newPost.content" required></textarea>
                <span v-if="this.error.content" style="color: red;" >{{this.error.content}}</span>
                <br>
                <button class="btn btn-primary" type="submit">Add Post</button>
             </form>
            <br>
            <br>
        </div>

        <app-content></app-content>
    </div>
</template>

<script>
import { mapMutations ,mapActions} from 'vuex';

import ContentPage from './ContentPage.vue';



export default {
   
    data () {
        return {
            newPost: 
                {
                id: 0,
                lastPosted: '',
                author: 'Hecton',
                title: '',
                content: '',
                },
            error: 
            {
                title: '',
                content: ''
            }    

         }
    },
    components:{
        'appContent': ContentPage
    },
    methods:{
        generateId(){
        var newID = (Math.floor(Math.random() * 9999));
        this.newPost.id = this.newID;
        },
        generateDate() {
            var d = new Date();
            var day = d.getDate();
            var month = d.getMonth()+1;
            var year = d.getFullYear();
            var fullDate = (day +'-'+ month +'-'+ year).toString();
            this.newPost.lastPosted = fullDate;
        },
        addPost: function(e){
            
            e.preventDefault();
            this.generateId();
            this.generateDate();
            
            this.error.title = '';
            this.error.content = '';

            if(!this.newPost.title){
                this.error.title = 'You need to set a title';
            }else if(!this.newPost.content){
                this.error.content = 'You need to set a content';
            }else{
                // Using $emit to pass data to the ContentPage
                //this.$emit('newPost', this.newPost);

                this.$store.commit('addPost', this.newPost);
                alert('You post was added!');
                 
            }



            // this.$http.post('data.json',
            // this.newPost).then(response => {
            //   console.log(response);
            // },  error => {
            //   console.log(error);
            // });

           // this.resource.save({},this.user )
            

            //this.$emit('newPost', this.newPost);

         

        }
    }
}
</script>


<style scoped>

</style>
