<script setup lang="ts">
import QRCodePanel from '../lobby/QRCodePanel.vue'
import PlayerList from '../lobby/PlayerList.vue'
import StatusView from '../game/StatusView.vue'
</script>

<template>
  <div class="sidebar">
    <PlayerList />
    <StatusView />
    <QRCodePanel />
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
}
</style>