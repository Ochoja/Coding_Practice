<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params)
</script>

<template>
  <div>
    Car View
  </div>
</template>