<template>
  <header>
      <Search @searchedText="emit" />
  </header>
</template>

<script>
import Search from '../components/Search.vue';
export default {
    name: "Header",
    components: {
        Search,
    },
    methods: {
        emit(string) {
            this.$emit('searchedText', string);
        }
    }
}
</script>

<style>
</style>