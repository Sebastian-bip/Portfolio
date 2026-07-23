import { createRouter, createWebHistory } from 'vue-router'
import FavoritesView from '@/views/FavoritesView.vue'
import HomeView from '@/views/HomeView.vue'
import MovieDetailsView from '@/views/MovieDetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/movie/:id', name: 'movie-details', component: MovieDetailsView },
    { path: '/favorites', name: 'favorites', component: FavoritesView },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
