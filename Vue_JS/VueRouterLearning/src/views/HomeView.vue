<script setup>
  import cars from "../data/cars.json";
</script>

<template>
  <div class="cars">
    <router-link :to="`/car/${car.id}`" v-for="car in cars" :key="car.id" class="car">
      {{ car.brand }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.cars {
  display:  flex;
  flex-wrap: wrap;

  .car{
    padding: 10px 20px;
    font-size: 1.3em;
    box-shadow: 5px 5px 10px #0000001e;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
}
</style>