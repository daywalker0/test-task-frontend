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
		<main class="main">
			<Form />
			<CardList />
		</main>
	</div>
</template>

<style scoped lang="scss">
.main {
	padding: 0 32px;
}
</style>
