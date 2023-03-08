<script setup>
/**Imports**/
import data from "../data.json";
import Card from "./components/SubjectCard.vue";
import { ref, watch } from "vue";

/**Data**/
const subjects = ref(data);
const search = ref(""); //holds result of search

/**Watchers**/
watch(search, () => {
  //update subjects value based on search query
  subjects.value = data.filter((subject) =>
    subject.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <main>
    <header>
      <h1>Quizzes</h1>
      <input v-model="search" type="search" placeholder="Search.." />
    </header>

    <section class="quizzes">
      <Card v-for="subject in subjects" :key="subject.id" :subject="subject" />
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
}
</style>
