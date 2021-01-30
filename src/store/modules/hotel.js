import hotels from '@/assets/hotels.json'

export default {
    state: {
        hotels: [],
        currentHotel: {},
    },

    actions: {
        async fetchHotels({ commit }) {
            // Запрос на backend
            // const response = await fetch('...');
            // commit('loadHotels', await response.json());

            commit('loadHotels', hotels);
        },

        async getCurrentHotel({ commit, getters, dispatch }, id) {
            // Запрос на backend, если данных в hotels мало
            // const response = await fetch('.../id');
            // commit('setCurrentHotel', await response.json());

            if (getters.hotels.length === 0)
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