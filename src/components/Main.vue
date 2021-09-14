<template>
  <main class="container mb-3">
      <CardDisplay :countryList="countryList" :searchedText="searchedText" :searchedTipe="'movie'" :title="'title'" :originalTitle="'original_title'"/>
      <CardDisplay :countryList="countryList" :searchedText="searchedText" :searchedTipe="'tv'" :title="'name'" :originalTitle="'original_name'"/>
  </main>
</template>

<script>
import CardDisplay from './CardDisplay.vue';
import axios from 'axios';

export default {
    name: 'Main',
    components: {
        CardDisplay
    },
    // Main.vue riceve il testo ricercato è lo passa tramite props a CardDisplay.vue
    props: ["searchedText"],
    data() {
        return {
            countryList: []
        }
    },
    created() {
        axios.get('https://datahub.io/core/country-list/r/data.json').then((res) => {
            this.countryList = res.data.map((element) => {
                return element.Code
            })
        })
    }
}
</script>

<style lang="scss">

</style>