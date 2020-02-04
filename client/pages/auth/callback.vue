<template>
<div class="container d-flex align-items-center justify-content-center flex-column">
  <img src="~/assets/loading.svg" alt="Loading..." width="80px" />
  Logging in...
</div>
</template>
<script>
export default {
  auth: false,
  layout: 'plain',

  async created() {
    try {
      
      const token = this.$route.query.token
      console.log(process.env.API_BASE_URL, token)
      const {data} = await this.$axios.$post(process.env.apiBaseUrl, { user:{}, token });
      console.log(data)
      this.$auth.setToken('local', "Bearer "+ data.token);
      this.$auth.setStrategy('local');
     // await auth.fetchUser();           
    } catch (e) {
        console.log(e);
    }
    console.log(this.$route.query.token)
  }
}
</script>
<style scoped>
.container {
  min-height: 70vh;
}
</style>
