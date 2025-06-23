<script setup>
import { ref } from 'vue';

const cart = ref(0);
</script>

<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart }})</div>
</template>
