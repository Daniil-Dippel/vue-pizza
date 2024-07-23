<template>
  <div class="categories">
    <ul>
      <li
        v-for="category in categories"
        :key="category"
        @click="handleClick(category)"
        :class="isActive === category ? 'active' : ''"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const isActive = ref("Все");
const emit = defineEmits()

const handleClick = (str) => {
  isActive.value = str;
  emit('filter', str)
}

</script>
