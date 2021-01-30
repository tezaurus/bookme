export default {
    state: {
        bookings: [],
    },

    actions: {
        async sendBooking({ commit }, bookingData) {
            // ~ POST запрос на сервер
            // нужно будет переработать метод submitBooking в BookingForm
            // fetch('...', { method: 'POST', body: JSON.stringify(bookingData)})
            //     .then(async response => {
            //         const data = await response.json();

            //         if (! data.ok) {
            //             const error = (data && data.message) || data.status;
            //             return Promise.reject(error);
            //         }
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });

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