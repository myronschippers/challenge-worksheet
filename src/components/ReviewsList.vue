<script setup>
defineProps({
  reviews: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="review-container">
    <h3>
      <slot name="title">Reviews:</slot>
    </h3>
    <slot></slot>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <span>{{ review.name }} gave this {{ review.rating }} stars</span>
        <br />
        <span>"{{ review.content }}"</span>
      </li>
    </ul>
  </div>
</template>
