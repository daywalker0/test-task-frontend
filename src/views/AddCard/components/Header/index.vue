<script setup lang="ts">
import { ref } from "vue";

const options = [
	{ id: 1, value: 'По умолчанию'},
	{ id: 2, value: 'По наименованию' },
	{ id: 3, value: 'По цене min (от большего к меньшему)' },
	{ id: 4, value: 'По цене max (от большего к меньшему)' }
]
const selected = ref('По умолчанию')
</script>

<template>
  <div class="header">
    <div class="header__container">
      <h5 class="page-title">Добавление товара</h5>
      <select
        v-model="selected"
        class="sort-select"
      >
        <option
          v-for="(option, index) in options"
          :key="index"
        >
          {{ option.value }}
        </option>
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
  color: #b4b4b4;
  background: #fffefb;
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
    color: #b4b4b4;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    outline: transparent;
    border: transparent;
    padding: 10px 16px;
  }
}
@media all and (max-width: 704px) {
  .sort-select {
    max-width: 130px;
    align-self: flex-start;
  }
}
@media all and (max-width: 375px) {
  .sort-select {
    max-width: 130px;
    align-self: flex-start;
  }
  .form {
    margin-right: 0;
    margin-bottom: 25px;
  }
}
</style>
