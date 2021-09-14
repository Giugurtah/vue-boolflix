<template>
    <div class="col-2">
        <div class="white h-100 p-2 rounded-0 text-center">
            <img :src="this.getImg()" class="w-100" alt="">
            <ul class="ps-0 mt-3">
                <li><span class="prime_color_txt">Titolo:</span> {{element[title]}} </li>
                <li><span class="prime_color_txt">Titolo originale:</span> {{element[originalTitle]}} </li>
                <li><span class="prime_color_txt">Lingua: </span>
                <!-- contryflag.io è un sito che risponde con l'icona delle NAZIONI coincidenti al codice iso 3166 -->
                <img v-if="langCode != ''" :src="'https://www.countryflags.io/' + langCode + '/flat/16.png'">
                <span v-else>{{element.original_language}}</span>
                    </li>
                <li>
                    <span class="prime_color_txt">Voto:</span>
                    <i v-for="n in 5" :key="n" :class="n <= vote ? 'fas' : 'far' " class="fa-star"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['element','countryList','title','originalTitle'],
  computed: {
    //   Poichè l'api themoviedb ritorna il codice iso 639 delle LINGUE bisogna aggiustare il codice lingua
    langCode() {
        let auxString = this.element.original_language;
        let isInList = false;

        // Controllo se la lingua dell'elemento ha un codice 639 e 3166 coincidenti
        this.countryList.forEach(element => {
            // Se coincidono ritorna il codice 639
            if (auxString.toUpperCase() == element) {
                isInList = true;
            }
        })

        if (!isInList) {
            // Se non cincidono controlla che sia sia inglese o un'altra lingua
            auxString = (auxString == 'en') ? 'gb' : ''; 
        }

        return auxString
    },
    vote() {
        return Math.ceil(this.element.vote_average / 2)
    }
  },
  methods: {
      getImg() {
          if (this.element.poster_path != null) {
              return 'https://image.tmdb.org/t/p/w342' + this.element.poster_path
          }
          return 'https://www.altavod.com/assets/images/poster-placeholder.png'
      }
  }
}
</script>
<style lang="scss">
ul {
    display: inline-block;
    list-style: none;
}
</style>