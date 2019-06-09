<template>
    <div class="header">
        <h1>Vue Blog</h1>
        <h3><i>Applying vuex, routes, props, emits, bus, components, directives and animation.</i></h3>
        <br>
        <router-link to="/" class="btn btn-success" style="cursor: pointer"> Home </router-link>
        <router-link to="/create" class="btn btn-success" style="cursor: pointer"> Create </router-link>
        </div>
</template>

<script>
export default {
  
}
</script>

<style>
.header {
  
  top: 0;
  left: 0;
  right: 0;
 
  width: 100%;
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
</style>
