<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import CardItem from './CardItem/index.vue'

const store = useStore();

</script>

<template>
	<CardItem />
</template>

<style scoped lang="scss">
</style>
