<script setup lang="ts">
import { onMounted, ref } from "vue";

const cardsData = ref([]);

const getCards = async () => {
  return fetch("https://api.escuelajs.co/api/v1/products").then((response) =>
    response.json()
  );
};
onMounted(() => {
  getCards().then((data) => {
    cardsData.value = data;
  });
});
</script>

<template>
  <div class="cardlist">
    <ul class="cardlist__wrap row">
      <li
        v-for="(card, index) in cardsData"
        :key="index"
        class="card-item"
      >
        <article>
          <div class="card-item__wrap">
            <div class="card-item__img">
              <img :src="card.category.image" alt="" />
            </div>
            <div class="card-item__info">
              <div class="card-item__info_wrap">
                <span class="card-item__info_title">
                  {{ card.title }}
                </span>
                <p class="card-item__info_description">
                  {{ card.description }}
                </p>
                <span class="card-item__info_price">
                  {{ card.price }} руб.
                </span>
              </div>
            </div>
            <div
              @click="cardsData.splice(index, 1)"
              class="card-delete"
              href="#"
            >
              <img src="/trash.svg" alt="delete" />
            </div>
          </div>
        </article>
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
.card-item {
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
  &__wrap {
    position: relative;
  }
  &__img {
    img {
      max-width: 100%;
    }
  }
  &__info {
    color: #3f3f3f;
    &_wrap {
      padding: 16px 16px 24px 16px;
      background: #fffefb;
    }
    &_title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
    &_description {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      padding: 16px 0;
      min-height: 112px;
    }
    &_price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
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
ul {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0;
	margin-inline-end: 0;
	padding-inline-start: 0;
}

@media all and (max-width: 768px) {
	.cardlist__wrap {
		gap: 20px 40px;
	}
}
@media all and (max-width: 704px) {
	.card-item {
		max-width: 100%;
	}
}
</style>
