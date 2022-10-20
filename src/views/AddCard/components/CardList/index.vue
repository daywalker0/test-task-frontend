<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import CardItem from "./CardItem/index.vue";

const store = useStore();
const cardsData = computed(() => store.state.cardsData);
</script>

<template>
  <div class="cardlist">
    <ul class="cardlist__wrap row">
      <li
				class="card-item"
				v-for="(card, index) in cardsData"
				:key="index">
        <CardItem
					:image="card.category.image"
					:title="card.title"
					:description="card.description"
					:price="card.price"
					:index="card.index"
				/>
				<div @click="cardsData.splice(index, 1)" class="card-delete" href="#">
					<img src="/trash.svg" alt="delete" />
				</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.cardlist {
  &__wrap {
    gap: 16px;
  }
}
ul {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

.card-item {
	position: relative;
	width: 100%;
  font-family: SourceSansPro;
  cursor: pointer;
  max-width: 332px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &:hover {
    .card-delete {
      opacity: 1;
    }
  }
}
.card-delete {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  height: 32px;
  width: 32px;
  background: #ff8484;
  position: absolute;
  top: -7px;
  right: -7px;
  opacity: 0;
  transition: opacity 0.35s ease;
  img {
    text-align: center;
    vertical-align: middle;
    background-size: 8px;
    padding: 8px;
  }
}

@media all and (max-width: 768px) {
  .cardlist__wrap {
    gap: 20px 40px;
  }
}
@media all and (max-width: 704px) {
}
</style>
