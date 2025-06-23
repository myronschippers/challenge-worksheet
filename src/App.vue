<script setup>
import { ref, computed } from 'vue';
import socksGreenImage from './assets/images/socks_green.jpeg';
import socksBlueImage from './assets/images/socks_blue.jpeg';

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
// now in stock messaging is based on inventory count
const inventory = ref(100);
// changing inStock boolean to be based on the inventory count
const inStock = computed(() => inventory.value > 0);

// Third Challenge - Create an `onSale` boolean `ref`. Use that to conditionally render a p tag that says: "On Sale" whenever `onSale` is `true`.
const onSale = ref(false);

// Fourth Lesson: displaying lists with `v-for`
const details = ref(['50% cotton', '30% wool', '20% polyester']);
const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage },
  { id: 2235, color: 'blue', image: socksBlueImage },
]);

// Fourth Challenge - Add an array of `sizes` as a `ref`. Use the `v-for` to display them in a list
const sizes = ref(['sm', 'md', 'lg', 'xl']);

// Fifth Lesson: interactions in the UI and dynamic events
const cart = ref(0);
const addToCart = () => {
  cart.value += 1;
  inventory.value -= 1;
};
const updateImage = (variantImage) => {
  image.value = variantImage;
};

// Fifth Challenge - Create a new button that decrements the value of cart
const removeItemFromCart = () => {
  if (cart.value === 0) {
    return;
  }

  cart.value -= 1;
  inventory.value += 1;
};
</script>

<template>
  <div class="nav-bar"></div>
  <!-- Fifth Lesson: dynamic events -->
  <div class="cart">Cart({{ cart }})</div>

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

        <!-- Third Challenge: On Sale conditional render -->
        <p v-if="onSale">On Sale</p>

        <p>{{ description }}</p>

        <!-- Second Challenge -->
        <a :href="url" target="_blank">Checkout Vue.js</a>

        <!-- Fourth Lesson: Lists with `v-for` -->
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
          v-for="variant in variants"
          :key="variant.id"
          @mouseover="updateImage(variant.image)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        ></div>

        <!-- Fourth Challenge: Lists with `v-for` -->
        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <div>
          <!-- Fifth Lesson: interaction -->
          <button
            class="button"
            :class="{ disabledButton: !inStock }"
            v-on:click="addToCart"
            :disabled="!inStock"
          >
            Add to Cart
          </button>
          <!-- `v-on` shorthand `@` -->
          <!-- <button class="button" @click="addToCart">Add to Cart</button> -->

          <!-- Fifth Challenge -->
          <button class="button button_fluid" @click="removeItemFromCart">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
