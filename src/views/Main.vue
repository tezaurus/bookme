<template>
    <div>
        <h1>Главная</h1>

        <h2>Выберите отель</h2>
        <div class="hotels">
            <div class="card hotel" v-for="hotel in hotels" :key="hotel.id">
                <div class="img-wrapper"></div>

                <div class="info-wrapper">
                    <h3>{{ hotel.title }}</h3>

                    <p>{{ hotel.addr }}</p>

                    <button class="btn" @click="gotoHotel(hotel.id)">Выбрать отель</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: mapGetters(['hotels']),

    methods: {
        gotoHotel(id) {
            this.$router.push({ name: 'hotel', params: { id: id } });
        }
    }
}
</script>

<style scoped>
.hotel {
    display: flex;
}

.hotel .img-wrapper {
    width: 160px;
    height: 120px;
    background-color: black;
    margin-right: 16px;
}

.hotel .info-wrapper {
    flex-grow: 1;
}
</style>