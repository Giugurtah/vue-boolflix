<template>
  <div class="search">
      <input class="mx-3 ps-2 prime_border second_color_txt rounded-2" type="text" placeholder="Cerca..." v-model="searchedText">
      <button class="rounded-2 border-0 prime_color fw-bold white_txt px-3 py-1" v-on:click="research(searchedText)">CERCA</button>
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

<style lang="scss">
input {
    width: 300px;
}
</style>