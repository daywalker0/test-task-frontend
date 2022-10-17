<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import CardItem from './CardItem/index.vue'

const store = useStore();

const cards = computed(() => store.state.cards)
</script>

<template>
	<div class="cardlist">
		<ul class="cardlist__wrap row">
			<CardItem
				class="col-4 col-3"
				v-for="(card, index) in cards"
				:key="index"
				:title="card.title"
				:subtitle="card.subtitle"
				:price="card.price"
			/>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.cardlist {
	&__wrap {
		gap: 16px;
	}
}
.row {
}
.col-4 {
}

</style>
