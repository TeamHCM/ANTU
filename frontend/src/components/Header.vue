<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse link-right" id="navbarSupportedContent">
        <!-- <ul class="navbar-nav mr-auto">
          
        </ul>-->
        <ul class="navbar-nav my-2 my-lg-0">
          <li v-if="loggedIn" class="nav-item">
            <router-link to="/" class="nav-link">
              Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li v-if="loggedIn" class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li v-if="!loggedIn" class="nav-item">
            <router-link to="/login" class="nav-link">
              Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
            <li v-if="!loggedIn" class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li v-if="loggedIn" class="nav-item">
            <router-link to="/logout" class="nav-link">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name:'headerComponent',
  computed: {
    loggedIn(){
      console.log(this.$store.getters)
    return this.$store.getters.loggedIn;
    }
  },
};
</script>
<style scoped>
.link-right{
  justify-content: flex-end;
}
</style>
