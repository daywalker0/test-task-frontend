<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import BaseInput from "./BaseInput/index.vue";
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

const formData = reactive({
	name: "",
	descr: "",
	link: "",
	price: "",
});

const disabled = computed(() => {
	return !formData.name || !formData.link || !formData.price
})

const rules = {
	name: { required },
	link: { required },
	price: { required },
};

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
	const result = await v$.value.$validate();
	if (result) {
		let cardList = document.querySelector('.cardlist__wrap')
		cardList.insertAdjacentHTML('afterbegin',
		`
		<li
		class="card-item"
		>
			<article>
				<div class="card-item__wrap">
					<div class="card-item__img">
						<img src="${ formData.link }" alt="" />
					</div>
					<div class="card-item__info">
						<div class="card-item__info_wrap">
							<span class="card-item__info_title">
								${ formData.name }
							</span>
							<p class="card-item__info_description">
								${ formData.descr }
							</p>
							<span class="card-item__info_price">
								${ formData.price } руб.
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
		`);
	}	else {
		alert("Ошибка, форма не заполнена!")
	}
}
</script>

<template>
  <div class="form">
    <div class="form__wrap">
      <form @submit.prevent="submitForm">
        <BaseInput
          class="form-item"
          placeholder="Введите наименование товара"
          v-model="formData.name"
          label="Наименование товара"
        />
        <span
          v-for="error in v$.name.$errors"
          :key="error.$uid"
          class="error-message"
          >Поле является обязательным</span
        >
        <div class="form-textarea">
          <label for="descr">Описание товара</label>
          <textarea
            placeholder="Введите описание товара"
            name="descr"
            cols="50"
            rows="9"
            v-model="formData.descr"
          ></textarea>
        </div>
        <BaseInput
          class="form-item"
          placeholder="Введите ссылку"
          v-model="formData.link"
          label="Ссылка на изображение товара"
        />
        <span
          v-for="error in v$.link.$errors"
          :key="error.$uid"
          class="error-message"
          >Поле является обязательным</span
        >
        <BaseInput
          class="form-item"
          placeholder="Введите цену"
          v-model="formData.price"
          label="Цена товара"
        />
        <span
          v-for="error in v$.price.$errors"
          :key="error.$uid"
          class="error-message"
          >Поле является обязательным</span
        >
        <q-btn
          :disabled="disabled"
          class="add-item-btn"
          label="Добавить товар"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form {
  margin-right: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__wrap {
    padding: 24px;
  }
}
.form-item {
  margin-top: 16px;
}
.form-textarea {
  margin-top: 16px;
  textarea {
    font-family: SourceSansPro;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3f3f3f;
    padding: 10px 16px;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    outline: transparent;
    border: transparent;
    width: 100%;
    resize: none;
    &::placeholder {
      font-family: SourceSansPro;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #b4b4b4;
    }
  }
  label {
    font-family: SourceSansPro;
    display: block;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485e;
    padding-bottom: 4px;
  }
}
.add-item-btn {
  width: 100%;
  background-color: #7bae73;
  border-radius: 10px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  text-transform: none;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 10px 0;
  margin-top: 24px;
}
.q-btn {
  font-family: Inter;
  transition: 0.6s ease;
  &::before {
    box-shadow: none;
  }
}
.q-btn[disabled] {
  transition: 0.6s ease;
  background: #eeeeee;
  color: #b4b4b4;
  cursor: not-allowed;
}
.error-message {
  font-family: SourceSansPro;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
}

@media all and (max-width: 1023px) {
	.form {
		margin-right: 0;
		margin-bottom: 25px;
	}
}
@media all and (max-width: 375px) {
}

</style>
