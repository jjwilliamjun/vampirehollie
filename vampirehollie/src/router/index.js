import { createRouter, createWebHistory } from 'vue-router';
import LiveLyrics from '../views/LiveLyrics.vue';
import History from '../views/History.vue';
import AlbumInfo from '../views/AlbumInfo.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', component: LiveLyrics },
  { path: '/history', component: History },
  { path: '/album-info', component: AlbumInfo },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;