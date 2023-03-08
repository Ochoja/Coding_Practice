<script setup>
defineProps(["subject"]);
</script>

<template>
  <div class="subject">
    <img :src="subject.img" alt="" />
    <h2>{{ subject.name }}</h2>
    <div class="num-question">{{ subject.questions.length }} questions</div>
  </div>
</template>

<style scoped lang="scss">
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
</style>
