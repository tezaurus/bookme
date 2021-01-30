<template>
    <div>
        <h1>Бронирование отеля</h1>

        <div class="hotel" v-if="currentHotel">
            <div class="img-wrapper"></div>

            <div class="info-wrapper">
                <h2>{{ currentHotel.title }}</h2>
                <p>{{ currentHotel.addr }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },

    computed: mapGetters(['currentHotel']),

    methods: mapActions(['getCurrentHotel']),

    async mounted() {
        this.getCurrentHotel(this.id);
    }
}
</script>

<style scoped>
.hotel .img-wrapper {
    width: 160px;
    height: 120px;
    background-color: black;
    margin-right: 16px;
}
</style>