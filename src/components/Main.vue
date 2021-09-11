<template>
  <main>
      <Card v-for="(element, index) in elementList" :key="index" :element="element"/>
  </main>
</template>

<script>
import Card from '../components/Card.vue';
import Vue from 'vue';
import axios from 'axios';
import AsyncComputed from 'vue-async-computed';

Vue.use(AsyncComputed);

export default {
    name: 'Main',
    props: ['searchedText'],
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
        async elementList() {
            let auxArray = [];
            if (this.searchedText != 0) {
                await axios.get(this.BaseUri + '/search/movie?' + this.ApiKey + '&query=' + this.searchedText).then((res) => {
                    auxArray = res.data.results;
                })
            }
            return auxArray;
        }
    },
}
</script>

<style>

</style>