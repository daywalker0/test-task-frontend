<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

const options = [
  {
    id: 1,
    label: "По умолчанию",
    function: function () {
      store.dispatch("GET_CARDS_FROM_API");
    },
  },
  {
    id: 2,
    label: "По наименованию",
    function: function () {
      store.commit("sortItemsByName");
    },
  },
  {
    id: 3,
    label: "По цене min (от меньшего к большему)",
    function: function () {
      store.commit("sortItemsMin");
    },
  },
  {
    id: 4,
    label: "По цене max (от большего к меньшему)",
    function: function () {
      store.commit("sortItemsMax");
    },
  },
];
</script>

<template>
  <div class="header">
    <div class="header__container">
      <h5 class="page-title">Добавление товара</h5>
      <q-btn-dropdown label="По умолчанию">
        <q-list>
          <q-item
            v-for="(option, id) in options"
            :key="option.id"
            clickable
            v-close-popup
            @click="option.function"
          >
            <q-item-section>
              <q-item-label>{{ option.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
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
.q-icon {
  display: none !important;
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
.q-item {
  font-family: SourceSansPro;
  text-transform: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  &:hover {
    opacity: 1;
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
