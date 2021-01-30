import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Hotel from '../views/Hotel.vue'
import Bookings from '../views/Bookings.vue'

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
    },
    {
        path: '/bookings',
        name: 'bookings',
        component: Bookings
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
