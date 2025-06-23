<script setup>
import { ref } from 'vue';
import socksGreenImage from './assets/images/socks_green.jpeg';

const product = ref('Socks');
const description = ref(
  'These are outstanding socks. Made from first rate alpaca fur.'
);

// Attribute binding with `v-bind`
// - without `ref` `v-bind` is not dynamic
const image = ref(socksGreenImage);

// Second Challenge - Add a `url` ref. Use `v-bind` to bind the url to an anchor tag's `href` attribute
const url = ref('https://vuejs.org/guide/quick-start');

// Conditional Rendering
// const inStock = ref(true);
// now in stock messaging is based on inventory count
const inventory = ref(100);
</script>

<template>
  <div class="nav-bar"></div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
        <!-- Shorthand for `v-bind:` -->
        <!-- <img :src="image" /> -->
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>

        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p>
        <!-- Example of hiding element with `v-show` -->
        <!-- <p v-show="inStock">In Stock (show)</p> -->

        <p>{{ description }}</p>

        <!-- Second Challenge -->
        <a :href="url" target="_blank">Checkout Vue.js</a>
      </div>
    </div>
  </div>
</template>
