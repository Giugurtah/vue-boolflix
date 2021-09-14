<template>
  <div class="row g-4">
      <h2 v-if="elementList.length != 0" class="prime_color_txt fs-1 mt-5 text-center">-{{searchedTipe.toUpperCase()}}-</h2>
      <Card v-for="(element, index) in elementList" :key="index" :element="element" :countryList="countryList" :title="title" :originalTitle="originalTitle"/>
  </div>
</template>

<script>
import Card from './Card.vue';
import axios from 'axios';

export default {
    name: 'CardDisplay',
    // CardDisplay richiede come props anche title ed originalTitle poichè per serie tv la chiamata differisce
    props: ['countryList', 'searchedText', 'searchedTipe', 'title', 'originalTitle'],
    components: {
        Card
    },
    data() {
        return {
            BaseUri: 'https://api.themoviedb.org/3',
            ApiKey: 'api_key=53daa74f0d09de5eebf1b3c546d9edc6',
            elementList: [],
        }
    },
    watch: {
        searchedText: function() {
            axios.get(this.BaseUri + '/search/' + this.searchedTipe + '?' + this.ApiKey + '&query=' + this.searchedText).then((res) => {
                this.elementList = res.data.results;
            })
        }
    }
}
</script>

<style lang="scss">
</style>