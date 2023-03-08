<script></script>

<template>
  <div class="subject">
    <img
      src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2012/11/AdobeStock_60467600_cup.jpg"
      alt=""
    />
    <h2>Name</h2>
    <div class="num-question">3 questions</div>
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
