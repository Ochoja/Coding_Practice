<script setup>
import { ref } from "vue";
const modal = ref(false);
</script>

<template>
  <main>
    <header>
      <h1>Notes</h1>
      <button @click="modal = true">+</button>
    </header>

    <section class="notes">
      <div class="card">
        <div class="note">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          reiciendis illum repellat cupiditate natus odio aliquid deserunt
          tenetur fugiat cumque?
        </div>
        <div class="date">27/01/2022</div>
      </div>

      <div class="card">
        <div class="note">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          reiciendis illum repellat cupiditate natus odio aliquid deserunt
          tenetur fugiat cumque?
        </div>
        <div class="date">27/01/2022</div>
      </div>

      <div class="card">
        <div class="note">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
          reiciendis illum repellat cupiditate natus odio aliquid deserunt
          tenetur fugiat cumque?
        </div>
        <div class="date">27/01/2022</div>
      </div>
    </section>
  </main>

  <div v-if="modal" class="popup">
    <div class="form">
      <div class="text">
        <textarea></textarea>
      </div>

      <button>Add Note</button>

      <button @click="modal = false" class="close">Close</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 50%;
  margin: auto;
  font-family: "Poppins", sans-serif;

  button {
    cursor: pointer;
  }
}

header {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 3.2em;
    font-weight: 600;
  }

  button {
    background: #000;
    color: white;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    font-size: 1.5em;
    border: none;
  }
}

.notes {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 25px;

  .card {
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    width: 14em;
    background: chocolate;
    border-radius: 5px;
    padding: 8px;
  }
}

.popup {
  background: rgba(29, 24, 24, 0.5);
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  .form {
    display: flex;
    flex-direction: column;
    width: 40%;
    border: none;
    border-radius: 5px;
    background: white;
    padding: 20px;

    textarea {
      border: 1px solid blue;
      padding: 10px;
      font-family: "Poppins", sans-serif;
      height: 8em;
      width: 100%;
      resize: none;
      box-sizing: border-box;
      background-color: #f8f8f8;
      margin-bottom: 10px;
    }

    textarea:focus {
      outline: blue !important;
      border: 2px solid blue;
    }

    button {
      width: 100%;
      border: none;
      background-color: blue;
      font-size: 16px;
      padding: 5px;
      color: #fff;
      cursor: pointer;
    }

    .close {
      margin-top: 8px;
      background: red;
    }
  }
}
</style>
