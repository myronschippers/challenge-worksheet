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
const selectedVariant = ref(0);

const url = ref('https://vuejs.org/guide/quick-start');

const onSale = ref(false);

const details = ref(['50% cotton', '30% wool', '20% polyester']);
const variants = ref([
  { id: 2234, color: 'green', image: socksGreenImage, quantity: 50 },
  { id: 2235, color: 'blue', image: socksBlueImage, quantity: 0 },
]);

const sizes = ref(['sm', 'md', 'lg', 'xl']);

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

const addToCart = () => {
  emit('add-to-cart', variants.value[selectedVariant.value].id);
};

const updateVariant = (variantIndex) => {
  selectedVariant.value = variantIndex;
};

const removeItemFromCart = () => {
  emit('remove-from-cart');
};

const addReview = (newReview) => {
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

        <p v-if="onSale">On Sale</p>

        <p>{{ description }}</p>

        <a :href="url" target="_blank">Checkout Vue.js</a>

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

        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <div>
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

          <button class="button button_fluid" @click="removeItemFromCart">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>

    <ReviewsList v-if="reviews.length > 0" :reviews="reviews">
      <template #title>Customer Reviews:</template>
      <template #default>
        <p>See what people said about the product</p>
      </template>
    </ReviewsList>
    <ReviewForm @review-submitted="addReview"></ReviewForm>
  </div>
</template>
