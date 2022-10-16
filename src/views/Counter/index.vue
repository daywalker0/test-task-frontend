<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const count = computed(() => store.state.count)
const increment = () => store.commit('increment')
const decrement = () => store.commit('decrement')
</script>

<template>
  <h1>
    {{ count }}
		<button @click="increment">Add</button>
		<button @click="decrement">Decr</button>
		<q-btn color="green" label="Godo" />
  </h1>
</template>

<style scoped lang="scss"></style>
