<template>
  <div class="search">
      <input type="text" placeholder="Cerca..." v-model="searchedText">
      <button v-on:click="research(searchedText)">Search</button>
  </div>
</template>

<script>
export default {
name: 'Search',
data() {
    return {
        searchedText: "",
    }
},
methods: {
    research(string) {
        this.$emit('searchedText', string);
    }
}
}
</script>

<style>

</style>