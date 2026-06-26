<script setup lang="ts">
import { store } from '../../game/state/GameStore';
</script>

<template>
  <section class="panel players" v-if="store.players.length">
    <h2>Jogadores</h2>

    <ul>
      <li v-for="player in store.players" :key="player.playerName">
        <span class="color" :class="player.color" />

        <span>{{ player.playerName }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.players {
  padding: 20px;
  padding-bottom: 12px;
}

h2 {
  font-size: 2rem;
  margin-block-start: 0;
  margin-block-end: 0.33em;
}

span {
  font-size: 1.5rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}

.color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
}

.red {
  background: var(--red);
}

.green {
  background: var(--green);
}

.blue {
  background: var(--blue);
}

.yellow {
  background: var(--yellow);
}
</style>