<template>
  <div class="nav">
    <router-link to="/" active-class="active">Home</router-link>
    <router-link to="/about" active-class="active">About</router-link>
  </div>
</template>

<style lang="scss" scoped>
  .nav{
    margin-bottom: 20px;
    a{
      text-decoration: none;
      padding: 0 10px;
    }

    a.active{
      font-weight: 900;
      color: red;
    }
  }
</style>