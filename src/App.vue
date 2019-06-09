<template>
  <div>   
      <header-component></header-component>
      <router-view></router-view>        
    
  </div>
</template>

<script>


import HeaderComponent from  './Components/HeaderComponent.vue';
import ContentPage from  './Components/ContentPage.vue';
import FullPost from './Components/FullPost.vue';



export default {
 
  components: {    
    'header-component': HeaderComponent,
    'appContent': ContentPage,
    'fullPost': FullPost
   
    
    }
}
</script>
