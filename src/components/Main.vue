<template>
  <main>
      <h2>Movies:</h2>
      <CardDisplay :countryList="getCountry" :searchedText="searchedText" :searchedTipe="'movie'" :title="'title'" :originalTitle="'original_title'"/>
      <h2>TV Show</h2>
      <CardDisplay :countryList="getCountry" :searchedText="searchedText" :searchedTipe="'tv'" :title="'name'" :originalTitle="'original_name'"/>
  </main>
</template>

<script>
import CardDisplay from './CardDisplay.vue';

import Vue from 'vue';
import axios from 'axios';
import AsyncComputed from 'vue-async-computed';

Vue.use(AsyncComputed);

export default {
    name: 'Main',
    components: {
        CardDisplay
    },
    // Main.vue riceve il testo ricercato è lo passa tramite props a CardDisplay.vue
    props: ["searchedText"],
    asyncComputed: {
        // Lista di tutte le nazioni con codice 3166 (utilizzata poi in Card.vue)
        async getCountry() {
            let auxArray = [];
            await axios.get('https://datahub.io/core/country-list/r/data.json').then((res) => {
                auxArray = res.data;
            })
            let auxArray2 = auxArray.map((element) => {
                return element.Code;
            })
            return auxArray2
        }
    }
}
</script>

<style>

</style>