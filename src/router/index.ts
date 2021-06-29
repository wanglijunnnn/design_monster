import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views//Index/index.vue'
import Editor from '../views/Editor/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})