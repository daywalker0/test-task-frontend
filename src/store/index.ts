import { createStore } from 'vuex'
import axios from 'axios'

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
		sortItemsByName: (state, cardsData) => {
			const newArray = state.cardsData
			newArray.sort((a, b) => a.title.localeCompare(b.title))
		},
		sortItemsMin: (state, cardsData) => {
			const newArray = state.cardsData
			newArray.sort((a,b) => b.price - a.price)
		},
		sortItemsMax: (state, cardsData) => {
			const newArray = state.cardsData
			newArray.sort((a,b) => a.price - b.price)
		}
	},
	actions: {
		GET_CARDS_FROM_API({ commit }) {
			const baseURL = "https://api.escuelajs.co/api/v1/products";
			axios
				.get(baseURL)
				.then(cardsData => {
					commit("SET_CARDS_TO_STATE", cardsData.data);
				})
				.catch(e => {
				console.log(e);
			});
		}
	},
	modules: {},
  plugins: []
})

export default store