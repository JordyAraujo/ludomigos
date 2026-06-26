<script setup lang="ts">
import * as QRCode from 'qrcode';
import { watch } from 'vue';
import { setJoinUrl, setDataUrl, session, joinUrl, dataUrl } from '../../game/state';

const controllerUrl = import.meta.env.VITE_CONTROLLER_URL;

watch(session, async (session) => {
  setJoinUrl(`${controllerUrl}?id=${session.id}`);
  const dataUrl = await QRCode.toDataURL(joinUrl());
  setDataUrl(dataUrl);
})
</script>

<template>
  <section class="panel qr-panel">
    <div class="qr-wrapper">
      <img v-if="dataUrl() !== ''" :src="dataUrl()" alt="QR code" />

      <div v-else>
        Gerando QR Code...
      </div>
      <h2 v-if="joinUrl() !== ''">{{ joinUrl() }}</h2>
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