<script setup>
import { onMounted, ref } from "vue";
import Categories from "@/components/Categories.vue";
import Pizza from "@/components/PizzaBlock/Pizza.vue";
import Sort from "@/components/Sort.vue";
import { useStore } from "vuex";


const store = useStore();
const pizzas = [
  {
    id: 0,
    name: "Бургер-пицца",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/c84a4190f97d4364ad2b614bd0d26297_366x366.webp",
    counter: 0,
    category: "Закрытые",
  },
  {
    id: 1,
    name: "Цыпленок карри",
    price: 475,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/f88f70774bdc4a198379c2f53b42f48f_366x366.webp",
    counter: 0,
    category: "Гриль",
  },
  {
    id: 2,
    name: "Сырная",
    price: 295,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/e2393e247dc64ecbbf23c82243c0a399_366x366.webp",
    counter: 0,
    category: "Вегетарианская",
  },
  {
    id: 3,
    name: "Ветчина и сыр",
    price: 295,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/3fe12c4bb05c470c9cb45fb423b7c049_366x366.webp",
    counter: 0,
    category: "Мясные",
  },
  {
    id: 4,
    name: "Пепперони Фреш",
    price: 325,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/525becd5f6d845ea9f83af0af7e44eea_366x366.webp",
    counter: 0,
    category: "Мясные",
  },
  {
    id: 5,
    name: "Двойной цыпленок",
    price: 325,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/f351d4358f134c31b5bed9093faf38e3_366x366.webp",
    counter: 0,
    category: "Гриль",
  },
  {
    id: 6,
    name: "Ветчина и грибы",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/be07674c38c54fd78f878a33988a4373_366x366.webp",
    counter: 0,
    category: "Мясные",
  },
  {
    id: 7,
    name: "Маргарита",
    price: 445,
    imgUrl:
      "https://dodopizza-a.akamaihd.net/static/Img/Products/3f19abd29d2a477a960992ec2f30782c_366x366.webp",
    counter: 0,
    category: "Вегетарианская",
  },
];
const filteredPizzas = ref(pizzas);

const filterPizzas = (data) => {
  if (data != "Все") {
    filteredPizzas.value = pizzas.filter((item) => item.category === data);
  } else {
    filteredPizzas.value = pizzas;
  }
};
const sortPizzas = (data) => {
  if (data === "алфавиту") {
    filteredPizzas.value = filteredPizzas.value
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    console.log(filteredPizzas.value);
  } else {
    filteredPizzas.value = pizzas;
  }
  if (data === "цене") {
    filteredPizzas.value = filteredPizzas.value
      .slice()
      .sort((a, b) => a.price - b.price);
    console.log(filteredPizzas.value);
  }
};
const cart = ref(JSON.parse(localStorage.getItem("cart")));

onMounted(() => {
  store.commit("TOTAL_COUNT_PRICE", cart.value);
});
</script>

<template>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Categories @filter="filterPizzas" />
        <Sort @filter="sortPizzas" />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <Pizza v-for="item in filteredPizzas" :key="item.id" :pizza="item" />
      </div>
    </div>
  </div>
</template>
