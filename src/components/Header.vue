<template>
   <div class="vue-header">    
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.positronx.io" target="_blank">
           Project Management System
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
   </div>
</template>

<script>

export default {
    components:{
    },
    computed:{
    }
}
</script>

<style scoped>
  .vue-header{
    margin-bottom: 70px;
  }  
</style>
