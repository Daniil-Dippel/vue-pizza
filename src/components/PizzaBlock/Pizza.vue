<template>
  <div class="pizza-block">
    <img class="pizza-block__image" :src="pizza.imgUrl" alt="Pizza" />
    <h4 class="pizza-block__title">{{ pizza.name }}</h4>
    <div class="pizza-block__selector">
      <Type @chooseCategory="(e) => (type = e)" />
      <Size @chooseSize="(e) => (size = e)" />
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ pizza.price }} ₽</div>
      <div @click="addPizza(pizza)" class="button button--outline button--add">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Size from "./Size.vue";
import Type from "./Type.vue";
import { useStore } from "vuex";

const store = useStore();

// mounted()
//   cart.value = [];
//   store.commit("TOTAL_COUNT_PRICE", cart.value);
//   localStorage.setItem("cart", JSON.stringify(cart.value));

defineProps(["pizza"]);
const type = ref("тонкое");
const size = ref(26);
const newPizza = ref({});

const addPizza = async (item) => {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  store.commit("TOTAL_COUNT_PRICE", localCart);
  if (localCart) {
    if (
      localStorage.getItem("cart").includes(item.name + type.value + size.value)
    ) {
       const newCart = localCart.map((localPizza) => {
        if (localPizza.id === item.name + type.value + size.value) {
          return { ...localPizza, counter: localPizza.counter + 1 };
        } else {
          return localPizza;
        }
      });
      setTimeout(() => {
        store.commit("TOTAL_COUNT_PRICE", newCart);
      }, 100);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      newPizza.value = {
        ...item,
        counter: 1,
        id: item.name + type.value + size.value,
        size: size.value,
        type: type.value,
      };
      localCart.push(newPizza.value);
      store.commit("TOTAL_COUNT_PRICE", localCart);
      localStorage.setItem("cart", JSON.stringify(localCart));
    }
  } else {
    newPizza.value = {
      ...item,
      counter: 1,
      id: item.name + type.value + size.value,
      size: size.value,
      type: type.value,
    };
    localStorage.setItem("cart", JSON.stringify([newPizza.value]));
    store.commit("TOTAL_COUNT_PRICE", localCart);
  }
  store.commit("TOTAL_COUNT_PRICE", localCart);
};
</script>
