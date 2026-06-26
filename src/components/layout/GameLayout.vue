<script setup lang="ts">
import Sidebar from './Sidebar.vue'

import BoardView from '../game/BoardView.vue'
import StatusView from '../game/StatusView.vue'
</script>

<template>
  <main class="layout">
    <section class="board-area">
      <BoardView />
    </section>

    <aside class="sidebar-area">
      <Sidebar />
    </aside>
  </main>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;

  padding: 40px;
  gap: 40px;

  display: grid;

  grid-template-columns:
    1fr var(--sidebar-width);

  grid-template-rows:
    1fr;

  grid-template-areas:
    "board sidebar";
}

.board-area {
  grid-area: board;
  min-width: 0;
  min-height: 0;
}

.sidebar-area {
  grid-area: sidebar;
}

.status-area {
  grid-area: status;
}
</style>