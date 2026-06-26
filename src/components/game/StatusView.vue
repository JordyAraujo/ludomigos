<script setup lang="ts">
import { currentTurnPlayer } from '../../game/state';

const currentPlayer = 'João'
const timeRemaining = 28
</script>

<template>
  <section class="panel status-panel" v-if="currentTurnPlayer()">
    <p>
      É a vez de <strong>{{ currentTurnPlayer() }}</strong>
    </p>

    <p>
      Tempo restante:
      <strong>{{ timeRemaining }}s</strong>
    </p>
  </section>
</template>

<style scoped>
.status-panel {
  padding: 20px;
}

p {
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-size: 1.5rem;
}

section :last-of-type {
  margin-block-start: 12px;
}
</style>