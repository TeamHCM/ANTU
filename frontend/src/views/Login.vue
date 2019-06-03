<template>
  <div class="form-login">
    <h1>
      <strong>Login</strong>
    </h1>
    <form action="#" @submit.prevent="login">
      <div class="form-group">
        <label for="exampleInputEmail1">Username/Email</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="username"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        >
      </div>
      <button type="submit" class="btn btn-success">
        <strong>Login</strong>
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
     this.$store.dispatch("retrieveToken", {
        username: this.username,
        password: this.password
      })
      .then((result) => {
        console.log(result)
        this.$router.push({name:'home'});
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
</script>
<style scoped>
.form-login {
  text-align: start;
  width: 500px;
  margin: 2px auto;
  margin-top: 50px;
}
.form-login button {
  width: 100%;
  margin-top: 15px;
}
</style>
