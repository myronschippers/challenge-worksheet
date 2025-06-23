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
        <p>{{ description }}</p>

        <!-- Second Challenge -->
        <a :href="url" target="_blank">Checkout Vue.js</a>
      </div>
    </div>
  </div>
</template>
