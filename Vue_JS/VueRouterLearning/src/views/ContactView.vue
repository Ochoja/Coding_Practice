<script setup>
import cars from "../data/cars.json";
import { useRoute  } from 'vue-router';

const route = useRoute();


const car = cars.find(item => item.id === parseInt(route.params.id))
</script>

<template>
  <div>
    <h1>Contact Info</h1>
    <p>Dealer: {{ car.contact.dealer }}</p>
    <p>Phone: {{ car.contact.number }}</p>
  </div>
</template>