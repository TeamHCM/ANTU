<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$store
      .dispatch("destroyToken")
      .then(result => {
        this.$router.push({ name: "login" });
      })
      .catch(err => {
        console.log("error");
      });
  }
};
</script>