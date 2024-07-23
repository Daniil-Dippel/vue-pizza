<template>
  <ul>
    <li
      v-for="item in items"
      :key="item"
      @click="chooseCategory(item)"
      :class="isActive === item && 'active'"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits()

const items = ["тонкое", "традиционное"];
const isActive = ref("тонкое");
const chooseCategory = (str) => {
  isActive.value = str;
  emit('chooseCategory', str)
}
</script>
