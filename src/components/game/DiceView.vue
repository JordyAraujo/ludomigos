<script setup lang="ts">
const diceValue = 1
</script>

<template>
  <section class="panel dice-panel">
    <h2>Dado</h2>

    <img class="pixelated" :src="`/assets/dice/${diceValue}.png`" alt="Dado" />
  </section>
</template>

<style scoped>
.dice-panel {
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

img {
  width: 100px;
}
</style>