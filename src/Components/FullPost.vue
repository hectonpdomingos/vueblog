<template>
    <div class="content container">
    
        <div class="post">
            <h2 style="text-align: center">{{post.title}}</h2>
            <p style="border: 1px solid; padding: 50px;">{{post.content}}</p>
            <p style="margin: 10px;">{{post.lastPosted}} - {{post.author}}</p> 
        </div>         
    </div>
</template>


<script>
import { mapGetters} from 'vuex';

export default {
        data () {
            return {
            
            }
        },

        computed: {
                   
            post() {
                 return this.$store.getters.getPostById(parseInt(this.$route.params.id));
                
            },  
                   
        }
   
}
</script>


<style scoped>
.content{
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
    
}


</style>
