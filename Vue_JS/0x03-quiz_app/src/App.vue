<script setup>
import data from "../data.json";
import { ref } from "vue";
const subjects = ref(data);
</script>

<template>
  <main>
    <header>
      <h1>Quizzes</h1>
      <input type="search" placeholder="Search.." />
    </header>

    <section class="quizzes">
      <div class="subject" v-for="subject in subjects" :key="subject.id">
        <img :src="subject.img" alt="" />
        <h2>{{ subject.name }}</h2>
        <div class="num-question">{{ subject.questions.length }} questions</div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
main {
  width: 70%;
  margin: auto;
  color: rgb(61, 55, 55);
}

header {
  display: flex;
  align-items: center;
  margin: 50px 0;

  h1 {
    margin-right: 20px;
  }

  input {
    padding: 10px 8px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    background: rgba(128, 128, 128, 0.1);
  }
}

.quizzes {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;

  .subject {
    display: flex;
    flex-direction: column;
    width: 250px;
    box-shadow: rgba(32, 29, 29, 0.1) 0px 4px 12px;
    border-radius: 5px;
    cursor: pointer;

    img {
      border-radius: 5px 5px 0 0;
    }

    h2 {
      margin: 8px 0 0 0;
      padding: 0px 8px;
    }

    .num-question {
      padding: 0 0 8px 8px;
    }
  }
}
</style>
