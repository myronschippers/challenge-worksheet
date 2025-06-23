<script setup>
import { ref, computed } from 'vue';
import ReviewForm from '@/components/ReviewForm.vue';
import ReviewsList from '@/components/ReviewsList.vue';
import socksGreenImage from '@/assets/images/socks_green.jpeg';
import socksBlueImage from '@/assets/images/socks_blue.jpeg';

const props = defineProps({
  premium: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['add-to-cart', 'remove-from-cart']);

const product = ref('Socks');
const brand = ref('Vue Mastery');
const description = ref(
  'These are outstanding socks. Made from first rate alpaca fur.'
);
const reviews = ref([]);

// computed - caches the value and only updates if the properties inside are updated
const title = computed(() => {
  return `${brand.value} ${product.value}`;
});

// Attribute binding with `v-bind`
// - without `ref` `v-bind` is not dynamic
// const image = ref(socksGreenImage);
const selectedVariant = ref(0);

// Second Challenge - Add a `url` ref. Use `v-bind` to bind the url to an anchor tag's `href` attribute
const url = ref('https://vuejs.org/guide/quick-start');

// Conditional Rendering
// now in stock messaging is based on inventory count
// const inventory = ref(100);
// changing inStock boolean to be based on the inventory count
// const inStock = computed(() => inventory.value > 0);

// Third Challenge - Create an `onSale` boolean `ref`. Use that to conditionally render a p tag that says: "On Sale" whenever `onSale` is `true`.
const onSale = ref(false);

// Fourth Lesson: displaying lists with `v-for`
const details = ref(['50% cotton', '30% wool', '20% polyester']);
const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
]);

// Fourth Challenge - Add an array of `sizes` as a `ref`. Use the `v-for` to display them in a list
const sizes = ref(['sm', 'md', 'lg', 'xl']);

// Seventh Lesson: `computed` values
const image = computed(() => {
  return variants.value[selectedVariant.value].image;
});
const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0;
});
const currentInventory = computed(() => {
  return variants.value[selectedVariant.value].quantity;
});

const shipping = computed(() => {
  if (props.premium) {
    return 'Free';
  }

  return 2.99;
});

const averageReviewRating = computed(() => {
  if (reviews.value.length === 0) {
    return '--';
  }
  const totalRating = reviews.value.reduce(
    (ratingsAccumulator, currentReview) => {
      return ratingsAccumulator + currentReview.rating;
    }
  );
  return totalRating / reviews.length;
});

// Fifth Lesson: interactions in the UI and dynamic events
const addToCart = () => {
  emit('add-to-cart', variants.value[selectedVariant.value].id);
};
// const updateImage = (variantImage) => {
//   image.value = variantImage;
// };
const updateVariant = (variantIndex) => {
  selectedVariant.value = variantIndex;
};

// Fifth Challenge - Create a new button that decrements the value of cart
const removeItemFromCart = () => {
  emit('remove-from-cart');
};

const addReviews = (newReview) => {
  reviews.value.push(newReview);
};
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" :class="[!inStock ? 'out-of-stock-img' : '']" />
        <!-- Shorthand for `v-bind:` -->
        <!-- <img :src="image" /> -->
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="currentInventory > 10">In Stock</p>
        <p v-else-if="currentInventory <= 10 && currentInventory > 0">
          Almost sold out!
        </p>
        <p v-else>Out of Stock</p>
        <!-- Example of hiding element with `v-show` -->
        <!-- <p v-show="inStock">In Stock (show)</p> -->
        <p>Shipping: {{ shipping }}</p>

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
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
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

    <ReviewsList :reviews="reviews"></ReviewsList>
    <ReviewForm @review-submitted="addReview"></ReviewForm>
  </div>
</template>
