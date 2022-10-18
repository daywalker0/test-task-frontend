<script setup lang="ts">
</script>

<template>
  <div class="header">
    <div class="header__container">
      <h5 class="page-title">Добавление товара</h5>
			<select class="sort-select">
				<option value="free" selected>По умолчанию</option>
				<option value="starter">По цене min (от меньшего к большему) </option>
				<option value="professional">По цене max (от большего к меньшему)</option>
				<option value="corporate">По наименованию</option>
			</select>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
	margin-bottom: 10px;
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
  color: #3f3f3f;
}
.q-btn__content > span {
  font-family: SourceSansPro;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}
.q-btn-dropdown {
  font-family: SourceSansPro;
  text-transform: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  &::before {
    box-shadow: none;
  }
}
.q-btn-dropdown__arrow {
  font-size: 15px;
}

.sort-select {
	font-family: SourceSansPro;
	font-weight: 400;
	font-size: 12px;
	line-height: 15px;
	color: #B4B4B4;
	background: #FFFEFB;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	outline: transparent;
	border: transparent;
	padding: 10px 16px;
	cursor: pointer;
	option {
		font-family: SourceSansPro;
		font-weight: 400;
		font-size: 12px;
		line-height: 15px;
		color: #B4B4B4;
		background: #FFFEFB;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		outline: transparent;
		border: transparent;
		padding: 10px 16px;
	}
}

</style>
