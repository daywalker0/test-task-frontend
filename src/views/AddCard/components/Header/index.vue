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
				<q-btn-dropdown label="По умолчанию">
					<q-list>
						<q-item clickable v-close-popup>
							<q-item-section>
								<q-item-label>- По цене min (от меньшего к большему)</q-item-label>
								<q-item-label>- По цене max (от большего к меньшему).</q-item-label>
								<q-item-label>- По наименованию.</q-item-label>
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
	font-family: SourceSansPro;
	font-weight: 600;
	font-size: 28px;
	line-height: 35px;
	color: #3F3F3F;
}
.q-btn__content > span {
	font-family: SourceSansPro;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #B4B4B4;
}
.q-btn-dropdown {
	font-family: SourceSansPro;
	text-transform: none;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #B4B4B4;
	background: #FFFEFB;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	&::before {
		box-shadow: none;
	}
}
.q-btn-dropdown__arrow {
	font-size: 15px;
}
</style>
