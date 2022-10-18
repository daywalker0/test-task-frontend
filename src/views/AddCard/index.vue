<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import Header from './components/Header/index.vue'
import Form from './components/Form/index.vue'
import CardList from './components/CardList/index.vue'

const store = useStore();

</script>

<template>
	<div class="wrapper">
		<Header />
		<main class="row main">
			<div class="col-3 col-xl-4">
				<Form />
			</div>
			<div class="col-9 col-xl-8">
				<CardList/>
			</div>
		</main>
	</div>
</template>

<style scoped lang="scss">
.wrapper {
	background: rgba(255, 254, 251, 0.8);
	padding: 0 0 16px 0;
}
.main {
	padding: 0 32px;
}
</style>
