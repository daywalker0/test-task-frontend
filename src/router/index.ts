import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'AddCard',
			component: () => import('../views/addCard/index.vue'),
			meta: {
				title: 'Добавление товара',
			},
		},
		{
			path: '/counter',
			name: 'counter',
			component: () => import('../views/counter/index.vue'),
			meta: {
				title: 'Добавление товара',
			},
		},
	]
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	next()
})

export default router;