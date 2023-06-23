<template>
    <main>
        <div class="search-bar">
            <div class="left-bar flex">
                <h1><a href="#" class="logo-text">Boolflix</a></h1>
                <ul class="flex">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serie TV</a></li>
                    <li><a href="#">Film</a></li>
                    <li><a href="#">Originali</a></li>
                    <li><a href="#">Aggiunti di recente</a></li>
                    <li><a href="#">La mia lista</a></li>
                </ul>
            </div>
            <div class="bar">
                <input type="text" name="search-bar" id="search-bar" placeholder="Inserisci il titolo di un film" v-model="searched" @keyup.enter="searchMoviesAndSeries">
                <button @click="searchMoviesAndSeries">Cerca</button>
            </div>
        </div>
    
        <Card />
    </main>
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
    main{
        background-color: #1b1b1b;
    }
    
    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
        color: #a2a2a2;
    }

    .flex{
        display: flex;
        flex-direction: row;
    }

    ul.flex{
        align-items: center;
        margin: 0 1rem;
        li{
            margin: 0 .5rem;
        }
    }
    
    div.search-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;

        a.logo-text{
            color: red;
        }

        div.left-bar{
            margin: 0 auto;
        }

        div.bar{
            margin: 0 auto;
            input#search-bar{
                margin: 2rem .5rem ;
                padding: .7rem;
            }
    
            button{
                padding: .7rem 3rem;
            }
        }

    }

    div.card{
        height: 200px;
        width: 300px;
    }
</style>