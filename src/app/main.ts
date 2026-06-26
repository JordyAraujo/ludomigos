import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { WebSocketService } from '../websocket/WebSocketService'
import { store } from '../game/state'

const websocketService = new WebSocketService()

websocketService.connect()

store.setWebsocketService(websocketService)

createApp(App)
  .use(router)
  .mount('#app')