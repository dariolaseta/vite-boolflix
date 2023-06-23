<template>
    <div class="search-bar">
        <input type="text" name="search-bar" id="search-bar" placeholder="Inserisci il titolo di un film" v-model="searched" @keyup.enter="searchMoviesAndSeries">
        <button @click="searchMoviesAndSeries">Cerca</button>
    </div>

    <Card />
</template>

<script>
import Searchbar from "./Searchbar.vue"
import {store} from "../store.js"
import Card from "./Card.vue"

import axios from 'axios';
//https://api.themoviedb.org/3/search/tv
export default {
    name: "AppMain",
    data(){
        return{
            searched: "",
            store
        }
    },
    components: {
        Searchbar,
        Card
    },
    methods:{
        searchMoviesAndSeries(){
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=9cf30d55b864819ac35dd0f7928aab85&query=${this.searched}`)
            .then((response) =>{
                store.tvSeriesList = response.data.results;
                console.log(store.tvSeriesList)
            });

            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=9cf30d55b864819ac35dd0f7928aab85&query=${this.searched}`)
            .then((response) =>{
                store.movieList = response.data.results;
                console.log(store.movieList)
            });
        }
    }
}
</script>

<style scoped lang="scss">
    
    div.search-bar{
        input#search-bar{
            margin: 2rem .5rem ;
            padding: .7rem;
        }

        button{
            padding: .7rem 3rem;
        }
    }

    div.card{
        height: 200px;
        width: 300px;
    }
</style>