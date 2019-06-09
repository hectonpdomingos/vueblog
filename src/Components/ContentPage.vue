<template>
    <div class="content container" >
        <h3>All Posts</h3>
        <hr>
        <div class="posts" v-for="(post, index) in posts" v-bind:key="index">

            <div class="post">

                <div class="list-group">
                <div lass="list-group-item">
                    <h4 class="list-group-item-heading">{{post.title}}</h4>
                    <p class="list-group-item-text">{{ post.content}}</p>
                    <router-link :to="`/post/${post.id}`"  style="cursor: pointer"> ...Read more </router-link>
                    
                    <p><i>Last posted: {{post.lastPosted}} - Author: {{ post.author}}</i></p>
                </div>
                </div>
              </div>
             <br>
            <br>
        </div>
        
    
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  
   
    computed: {

     posts(){
      return this.$store.getters.getAllPosts;
    
        }
    }

   
}
</script>


<style scoped>
.content{
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
}

.post{
    display:flex;
    justify-content: space-between;
    
}
</style>
