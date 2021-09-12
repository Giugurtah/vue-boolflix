<template>
  <div>
      <Card v-for="(element, index) in elementList" :key="index" :element="element" :countryList="countryList" :title="title" :originalTitle="originalTitle"/>
  </div>
</template>

<script>
import Card from './Card.vue';

import Vue from 'vue';
import axios from 'axios';
import AsyncComputed from 'vue-async-computed';

Vue.use(AsyncComputed);

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
        }
    },
    asyncComputed: {
        // CardDisplay riceve il testo ricercato e la tipologia di media, ed esegue la ricerca, poi tramite props passa i contenuti della lista a Card
        async elementList() {
            let auxArray = [];
            if (this.searchedText) {
                await axios.get(this.BaseUri + '/search/' + this.searchedTipe + '?' + this.ApiKey + '&query=' + this.searchedText).then((res) => {
                    auxArray = res.data.results;
                })
            }
            return auxArray
        },
    },
}
</script>

<style>

</style>