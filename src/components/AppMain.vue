<template>
    <Searchbar @searched="searchMovies"/>
    <ul>
        <li v-for="(movies, index) in movieList">
            {{"Titolo: " + movieList[index].title}}
            {{" ----- Titolo originale: " + movieList[index].original_title + " ----- Lingua: " + movieList[index].original_language + " ----- Voto: " + movieList[index].vote_average}}
        </li>
    </ul>
    <p>{{ searchedText }}</p>

</template>

<script>
import Searchbar from "./Searchbar.vue"

import axios from 'axios';

export default {
    name: "AppMain",
    data(){
        return{
            movieList: [],
            api: "https://api.themoviedb.org/3/search/movie?api_key=9cf30d55b864819ac35dd0f7928aab85&query="
        }
    },
    components: {
        Searchbar
    },

    methods:{
        searchMovies(needle = "searchedText"){
            if(needle === "searchedText"){
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9cf30d55b864819ac35dd0f7928aab85&query=`)
                    .then((response) => {
                        this.movieList = response.data.results
                        console.log(this.movieList)
                    })
            } else {
                axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9cf30d55b864819ac35dd0f7928aab85&query=${needle}`)
                    .then((response) => {
                        this.movieList = response.data.results
                        console.log(this.movieList)
                    })
            }
        }
    },
    created(){
        this.searchMovies();
    }
}
</script>

<style scoped lang="scss">
    
</style>