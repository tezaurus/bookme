import hotels from '@/assets/hotels.json'

export default {
    state: {
        hotels: [],
        currentHotel: {},
    },

    actions: {
        async fetchHotels({ commit }) {
            // Fetch from backend

            commit('loadHotels', hotels);
        },

        async getCurrentHotel({ commit, getters, dispatch }, id) {
            // Fetch from backend, if needs
            await dispatch('fetchHotels');

            const hotel = getters.hotels.find(hotel => hotel.id === id);

            commit('setCurrentHotel', hotel);
        }
    },

    mutations: {
        loadHotels(state, hotels) {
            state.hotels = hotels;
        },

        setCurrentHotel(state, hotel) {
            state.currentHotel = hotel;
        }
    },

    getters: {
        hotels(state) {
            return state.hotels;
        },

        currentHotel(state) {
            return state.currentHotel;
        }
    }
}