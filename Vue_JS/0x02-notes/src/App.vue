<script setup>
import { ref } from "vue";

//states
const showModal = ref(false);
const note = ref("");
const notes = ref([]);
const errorMessage = ref(false);

/*Methods*/
//Add Note
function addNote() {
  if (note.value.length < 15) {
    errorMessage.value = true;
    return;
  }

  notes.value.push({
    id: Math.floor(Math.random * 1000000),
    text: note.value,
    date: new Date(),
    backgroundColor: getRandomColor(),
  });

  showModal.value = false; //close modal
  note.value = ""; //reset the value of textarea
}

//Close Popup Modal
const closeModal = () => {
  showModal.value = false;
  errorMessage.value = false;
  note.value = "";
};

//Generates a random color for note
function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
</script>

<template>
  <main>
    <header>
      <h1>Notes</h1>
      <button @click="showModal = true">+</button>
    </header>

    <section class="notes">
      <div
        v-for="(note, index) in notes"
        :key="index"
        :style="{ backgroundColor: note.backgroundColor }"
        class="card"
      >
        <div class="note">{{ note.text }}</div>
        <div class="date">{{ note.date.toLocaleDateString("en-GB") }}</div>
      </div>
    </section>
  </main>

  <!-- Popup modal -->
  <div v-if="showModal" class="popup">
    <div class="form">
      <div class="text">
        <textarea v-model.trim="note" placeholder="add a new note"></textarea>
      </div>

      <div v-show="errorMessage" class="error">
        Note should not be less than 15 characters
      </div>
      <button @click="addNote()">Add Note</button>
      <button @click="closeModal()" class="close">Close</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
main {
  width: 70%;
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
  flex-wrap: wrap;
  gap: 25px;

  .card {
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 14em;
    height: 15em;
    background: chocolate;
    border-radius: 5px;
    padding: 8px;

    .note {
      overflow-wrap: break-word;
      overflow-y: auto;
    }
    .date {
      font-weight: 600;
      padding-top: 10px;
    }
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

    //error message
    .error {
      color: red;
      margin-bottom: 5px;
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

    //close button
    .close {
      margin-top: 8px;
      background: red;
    }
  }
}
</style>
