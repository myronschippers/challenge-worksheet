<script setup>
import { ref } from 'vue';
import ProductDisplay from '@/components/ProductDisplay.vue';

const cart = ref(0);
const premium = ref(false);

const addToCart = () => {
  cart.value += 1;
};

const removeFromCart = () => {
  if (cart.value === 0) {
    return;
  }
  cart.value -= 1;
};
</script>

<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart }})</div>

  <ProductDisplay
    :premium="premium"
    @add-to-cart="addToCart"
    @remove-from-cart="removeFromCart"
  ></ProductDisplay>
</template>
