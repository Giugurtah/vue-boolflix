<template>
  <div id="app">
    <Header @searchedText="get"/>
    <Main :searchedText="searchedText"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      searchedText: "",
    }
  },
  methods: {
    get(string) {
      this.searchedText = string;
    }
  }
}
</script>

<style lang="scss">
</style>
