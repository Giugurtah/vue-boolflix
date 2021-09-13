<template>
    <div class="card">
        <ul :style="{ backgroundImage : this.getImg() }">
            <li><span>Titolo:</span> {{element[title]}} </li>
            <li><span>Titolo originale:</span> {{element[originalTitle]}} </li>
            <li><span>Lingua: </span> 
            <!-- contryflag.io è un sito che risponde con l'icona delle NAZIONI coincidenti al codice iso 3166 -->
            <img v-if="langCode != ''" :src="'https://www.countryflags.io/' + langCode + '/flat/16.png'">
            <span v-else>{{element.original_language}}</span>
             </li>
            <li>
                <span>Voto:</span>
                <i v-for="(element, index) in getScore(element.vote_average)" :key="index" :class="element" class="fa-star"></i>
            </li>
        </ul>
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
    }
  },
  methods: {
      getImg() {
          if (this.element.poster_path != null) {
              return 'url(https://image.tmdb.org/t/p/w342' + this.element.poster_path + ')'
          }
          return 'url(https://www.altavod.com/assets/images/poster-placeholder.png)'
      },
      getScore(number) {
          let score = Math.ceil(number / 2);
          console.log(score);
          let auxArray = [];
          for (let i = 0; i<score; i++) {
              auxArray[i] = "fas";
          }
          for (let i = score; i<5; i++) {
              auxArray[i] = "far";
          }
          console.log(auxArray);
          return auxArray;
      }
  }
}
</script>
<style>
ul {
    display: inline-block;
    height: 300px;
    width: 150px;

    background-position: center;
    background-size: cover;
}
span {
    font-weight: 800;
}
.casa {

}
</style>