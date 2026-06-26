import { createRouter, createWebHistory } from 'vue-router'
import GameLayout from '../components/layout/GameLayout.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: GameLayout
    }
  ]
})