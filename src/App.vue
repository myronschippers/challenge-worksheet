<script setup>
import { ref } from 'vue';

const product = ref('Socks');
const description = ref(
  'These are outstanding socks. Made from first rate alpaca fur.'
);
</script>

<template>
  <div class="nav-bar"></div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>
