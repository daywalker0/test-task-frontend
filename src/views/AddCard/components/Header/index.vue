<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

</script>

<template>
	<div class="header">
		<div class="header__container">
			<h5 class="page-title">Добавление товара</h5>
			<div class="q-pa-md">
				<q-btn-dropdown color="primary" label="Dropdown Button">
					<q-list>
						<q-item clickable v-close-popup>
							<q-item-section>
								<q-item-label>от А до Я</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</q-btn-dropdown>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.header {
	&__container {
		padding: 15px 32px 0 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
.page-title {
	font-family: 'Source Sans Pro';
	font-weight: 600;
	font-size: 28px;
	line-height: 35px;
	color: #3F3F3F;
}
.q-pa-md {
}

</style>
