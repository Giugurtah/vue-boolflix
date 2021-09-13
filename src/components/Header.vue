<template>
  <header class="d-flex justify-content-between align-items-center black p-3">
      <div class="prime_color_txt font_logo ms-3">BOOTSTRAP</div>
      <Search class="me-3" @searchedText="emit" />
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