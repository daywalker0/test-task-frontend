<script setup lang="ts">
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

function GET_CARDS_FROM_API() {
  store.dispatch("GET_CARDS_FROM_API");
}

onMounted(() => {
  GET_CARDS_FROM_API();
});

const cards = defineProps({
  image: String,
  title: String,
  description: String,
  price: Number,
});
</script>

<template>
  <article>
    <div class="card-item__wrap">
      <div class="card-item__img">
        <img :src="image" alt="" />
      </div>
      <div class="card-item__info">
        <div class="card-item__info_wrap">
          <span class="card-item__info_title">
            {{ title }}
          </span>
          <p class="card-item__info_description">
            {{ description }}
          </p>
          <span class="card-item__info_price"> {{ price }} руб. </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.card-item {
  &__wrap {
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
      display: flex;
      flex-direction: column;
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
@media all and (max-width: 704px) {
  .card-item {
    max-width: 100%;
  }
}
</style>
