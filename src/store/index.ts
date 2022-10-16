import { createStore } from 'vuex'

const store = createStore({
	state: {
		count: 10,
	},
	mutations: {
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		}
	},
	getters: {},
	actions: {},
	modules: {},
})

export default store