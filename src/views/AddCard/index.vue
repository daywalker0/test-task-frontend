<script setup lang="ts">
import Header from './components/Header/index.vue'
import Form from './components/Form/index.vue'
import CardList from './components/CardList/index.vue'

</script>

<template>
	<div class="wrapper">
		<Header />
		<main class="row main">
			<div class="col-xs-12 col-md-4 col-lg-3">
				<Form />
			</div>
			<div class="col-xs-12 col-md-8 col-lg-9">
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
