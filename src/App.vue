<script setup>
import { ref } from 'vue';
import ProductDisplay from '@/components/ProductDisplay.vue';

const cart = ref([]);
const premium = ref(false);

const updateCart = (id) => {
  cart.value.push(id);
};

const removeFromCart = () => {
  cart.value.pop();
};
</script>

<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart.length }})</div>

  <ProductDisplay
    :premium="premium"
    @add-to-cart="updateCart"
    @remove-from-cart="removeFromCart"
  ></ProductDisplay>
</template>
