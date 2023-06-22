<template>
    <Searchbar @searched="searchMovies"/>
    <ul>
        <li v-for="(movies, index) in movieList">
            <div>
                <p>{{"Titolo: " + movieList[index].title}}</p>
                <p> {{" Titolo originale: " + movieList[index].original_title}}</p>
                <p>{{ "Lingua: " + movieList[index].original_language }}</p>
                <p>{{ "Voto: " + movieList[index].vote_average }}</p>
            </div>
        </li>
    </ul>

</template>

<script>
import Searchbar from "./Searchbar.vue"

import axios from 'axios';

export default {
    name: "AppMain",
    data(){
        return{
            movieList: [],
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
    li{
        div{
            margin: 1rem;
        }
    }
</style>