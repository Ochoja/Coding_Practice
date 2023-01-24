<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <main>
    <div class="num">{{ count }}</div>
    <div class="btn">
      <button @click="count++" class="add">+</button>
      <button @click="count--" class="sub">-</button>
    </div>
  </main>
</template>

<style lang="scss">
main {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.num {
  font-size: 3em;
}

.btn {
  margin-top: 10px;
  display: inline-flex;
  gap: 10px;

  button {
    color: #fff;
    font-size: 1.2em;
    font-weight: 800;
    width: 3em;
    height: 2em;
    border: none;
    border-radius: 5px;
  }

  .add {
    background: green;
  }

  .sub {
    background: red;
  }
}
</style>
