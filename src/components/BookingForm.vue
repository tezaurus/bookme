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
                        <input type="text" class="form-control" name="email" v-model="email">
                        <div class="form-control-text form-control-text-error" v-show="!email">Поле обязательно для заполнения</div>
                    </div>

                    <div class="form-group">
                        <label for="">Имя гостя</label>
                        <input type="text" class="form-control" name="name" v-model="name">
                        <div class="form-control-text form-control-text-error" v-show="!name">Поле обязательно для заполнения</div>
                    </div>

                    <div class="form-group">
                        <label for="">Телефон гостя</label>
                        <input type="text" class="form-control" name="phone" v-model="phone">
                        <div class="form-control-text form-control-text-error" v-show="!phone">Поле обязательно для заполнения</div>
                    </div>

                    <div class="btn-wrapper">
                        <button class="btn" type="submit" :disabled="!fieldsIsValid">Забронировать</button>
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
            email: null,
            name: null,
            phone: null,
            sended: false,
        }
    },

    computed: {
        ...mapGetters(['currentHotel']),

        fieldsIsValid() {
            return this.email && this.name && this.phone;
        }
    },

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

            // При реальном запросе нужно будет обрабатывать then() catch()
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
            this.email = this.name = this.phone = null;
        }
    }
}
</script>

<style scoped>

</style>