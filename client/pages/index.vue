<template>
  <div class="container">

    <div v-if="$auth.hasScope('admin')">
      <h1 > Admin area </h1>
      <div>
        <h1 class="title"> Full Auth </h1>
        <h2 class="subtitle"> V2 </h2>
      
        <b-button @click.prevent="logout" variant="outline-success">Logout</b-button>       
      </div>
    </div>
    <div v-else>
      Restricted area
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
