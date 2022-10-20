import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
	state: {
		cardsData: [],
	},
	getters: {
		CARDSDATA(state) {
			return state.cardsData
		},
	},
	mutations: {
		SET_CARDS_TO_STATE: (state, cardsData) => {
			state.cardsData = cardsData
		},
	},
	actions: {
		GET_CARDS_FROM_API({commit}) {
			return axios("https://api.escuelajs.co/api/v1/products", {
				method: "GET"
			})
			.then((cardsData) => {
				commit('SET_CARDS_TO_STATE', cardsData.data)
			})
		}
	},
	modules: {},
	plugins: [createPersistedState()]
})

export default store