<template>
    <div>
        <h1>Текущие брони</h1>

        <div class="bookings" v-if="bookings.length">
            <div class="booking" v-for="booking in bookings" :key="booking.id">
                <div class="card">
                    <div class="card-header">{{ booking.hotel.title }}, {{ booking.hotel.addr }}</div>

                    <div class="card-body">
                        <p>E-mail: {{ booking.email }}</p>
                        <p>Имя: {{ booking.name }}</p>
                        <p>Телефон: {{ booking.phone }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="bookings" v-else>
            <p>Еще нет ни одной текущей брони, <router-link to="/">выберите отель</router-link>, чтобы выполнить бронь</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['bookings'])
}
</script>

<style scoped>

</style>