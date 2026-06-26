import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { WebSocketService } from '../websocket/WebSocketService'
import { setWebsocketService } from '../game/state'

const websocketService = new WebSocketService();

websocketService.connect();

setWebsocketService(websocketService);

createApp(App)
  .use(router)
  .mount('#app')