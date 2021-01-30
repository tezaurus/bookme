export default {
    state: {
        bookings: [],
    },

    actions: {
        async sendBooking({ commit }, bookingData) {
            // Post to backend

            commit('storeBooking', bookingData);
        }
    },

    mutations: {
        storeBooking(state, bookingData) {
            state.bookings.push(bookingData);
        },
    },

    getters: {
        bookings(state) {
            return state.bookings;
        },
    }
}