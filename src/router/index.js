import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Hotel from '../views/Hotel.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/hotels/:id',
        name: 'hotel',
        component: Hotel
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
