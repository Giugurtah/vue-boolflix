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
    // App riceve da Header.vue il testo ricercato e lo passa tramite props a Main.vue
    get(string) {
      this.searchedText = string;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/index.scss";
</style>
