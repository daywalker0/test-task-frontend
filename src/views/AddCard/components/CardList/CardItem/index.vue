<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  imgUrl: String,
  title: String,
  subtitle: String,
  price: String,
});

const cards = computed(() => store.state.cards)
</script>

<template>
  <li class="card-item">
    <article>
      <div class="card-item__wrap">
        <div class="card-item__img">
          <img src="/item-card.png" alt="" />
        </div>
        <div class="card-item__info">
          <div class="card-item__info_wrap">
            <span class="card-item__info_title">
              {{ title }}
            </span>
            <p class="card-item__info_subtitle">
              {{ subtitle }}
            </p>
            <span class="card-item__info_price"> {{ price }} руб. </span>
          </div>
        </div>
        <div @click="cards.splice(index, 1)" class="card-delete" href="#">
          <img src="/trash.svg" alt="delete" />
        </div>
      </div>
    </article>
  </li>
</template>

<style scoped lang="scss">
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
    &_subtitle {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      padding: 16px 0;
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
</style>
