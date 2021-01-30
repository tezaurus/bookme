import hotels from '@/assets/hotels.json'

export default {
    state: {
        hotels: [],
    },

    actions: {
        async fetchHotels({ commit }) {
            // Fetch from backend

            commit('loadHotels', hotels);
        }
    },

    mutations: {
        loadHotels(state, hotels) {
            state.hotels = hotels;
        }
    },

    getters: {
        hotels(state) {
            return state.hotels;
        }
    }
}