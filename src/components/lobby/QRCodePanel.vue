<script setup lang="ts">
import * as QRCode from 'qrcode'
import { watch } from 'vue'
import { store } from '../../game/state'

const controllerUrl = import.meta.env.VITE_CONTROLLER_URL

watch(store.session, async (session) => {
  store.setJoinUrl(`${controllerUrl}?id=${session.id}`)
  const dataUrl = await QRCode.toDataURL(store.joinUrl())
  store.setDataUrl(dataUrl)
})
</script>

<template>
  <section class="panel qr-panel">
    <div class="qr-wrapper">
      <img v-if="store.dataUrl() !== ''" :src="store.dataUrl()" alt="QR code" />

      <div v-else>
        Gerando QR Code...
      </div>
      <h2 v-if="store.joinUrl() !== ''">{{ store.joinUrl() }}</h2>
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 1.1rem;
  margin-block-start: 20px;
  margin-block-end: 0px;
}

.qr-panel {
  padding: 20px;
}

.qr-wrapper {
  aspect-ratio: 1;

  display: grid;
  place-items: center;
}

img {
  image-rendering: pixelated;
  border-radius: 9px;
  width: stretch;
}
</style>