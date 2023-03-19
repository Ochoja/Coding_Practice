<script setup>
import cars from "../data/cars.json";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const car = cars.find(item => item.id === parseInt(route.params.id))
</script>

<template>
  <div>
    <h1>Car View</h1>
    <p>Brand: {{ car.brand }}</p>
    <p>Year: {{ car.year }}</p>
    <p>Price: ${{ car.price }}</p>

    <button @click="router.push(`/car/${route.params.id}/contact`)">Click to show Contact</button>
    <router-view></router-view>
  </div>
</template>