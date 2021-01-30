<template>
    <div>
        <div class="card" v-if="sended">
            <div class="card-header">Поздравляем, бронь успешно отправлена!</div>

            <div class="card-body">
                <form>
                    <div class="btn-wrapper">
                        <button class="btn" @click.prevent="gotoBookings">Текущие брони</button>
                        <button class="btn" @click.prevent="ok">OK</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="card" v-else>
            <div class="card-header">Заполните форму для бронирования отеля</div>

            <div class="card-body">
                <form @submit.prevent="submitBooking">
                    <div class="form-group">
                        <label for="">E-mail</label>
                        <input type="text" class="form-control" v-model="email">
                    </div>

                    <div class="form-group">
                        <label for="">Имя гостя</label>
                        <input type="text" class="form-control" v-model="name">
                    </div>

                    <div class="form-group">
                        <label for="">Телефон гостя</label>
                        <input type="text" class="form-control" v-model="phone">
                    </div>

                    <div class="btn-wrapper">
                        <button class="btn" type="submit">Забронировать</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            email: '',
            name: '',
            phone: '',
            sended: false,
        }
    },

    computed: mapGetters(['currentHotel']),

    methods: {
        ...mapActions(['sendBooking']),

        submitBooking() {
            const bookingData = {
                id: Date.now(),
                hotel: this.currentHotel,
                email: this.email,
                name: this.name,
                phone: this.phone,
            }

            this.sendBooking(bookingData);

            this.resetForm();

            this.sended = true;
        },

        ok() {
            this.sended = false;
        },

        gotoBookings() {
            this.$router.push({ name: 'bookings' });
        },

        resetForm() {
            this.email = this.name = this.phone = '';
        }
    }
}
</script>

<style scoped>

</style>