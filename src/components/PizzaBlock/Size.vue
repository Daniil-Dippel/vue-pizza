<template>
  <ul>
    <li
      v-for="item in items"
      :key="item"
      @click="chooseSize(item)"
      :class="isActive === item && 'active'"
    >
      {{ item }} см.
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits()

const items = [26, 30, 40];
const isActive = ref(26);

const chooseSize = (str) => {
  isActive.value = str;
  emit('chooseSize', str)
}
</script>
