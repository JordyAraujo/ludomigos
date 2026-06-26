<template>
  <section class="panel board-panel">
    <!-- <div ref="boardRef" class="board-container" /> -->
  </section>
</template>

<style scoped>
.board-panel {
  width: 100%;
  height: 100%;
  padding: 20px;

  display: grid;
  place-items: center;

  background-image: url('../../assets/board.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* ou cover */
  image-rendering: pixelated;
}

.board-container {
  width: min(90vh, 100%);
  aspect-ratio: 1;
  position: relative;
}
</style>