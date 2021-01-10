<template>
  <div id="app">
    <div id="nav" class="flex f-jcc f-aic">
      <router-link to="/">Home</router-link>
      <router-link to="/addemployee">Add Employee</router-link>
      <router-link to="/addclient">Add Client</router-link>
    </div>
    <router-view />
    <div class="footer flex f-aic f-jcc font-white">
      Created by Prakhar Chaurasiya 
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  font-family: 'Roboto' ,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 10vh;
  background: rgb(192, 255, 200);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
