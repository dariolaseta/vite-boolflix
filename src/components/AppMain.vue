<template>
    <div class="search-bar">
        <input type="text" name="search-bar" id="search-bar" placeholder="Inserisci il titolo di un film" v-model="searched" @keyup.enter="searchMoviesAndSeries">
        <button @click="searchMoviesAndSeries">Cerca</button>
    </div>

    <ul class="movies">
        <li v-for="(movies, index) in store.movieList">
            <div>
                <h1>FILM</h1>
                <p>{{"Titolo: " + store.movieList[index].title}}</p>
                <p> {{" Titolo originale: " + store.movieList[index].original_title}}</p>
                <p v-if="store.movieList[index].original_language === 'en'"><img src="../assets/imgs/eng.png" alt="" class="lang-img"></p>
                <p v-if="store.movieList[index].original_language === 'it'"><img src="../assets/imgs/it.png" alt="" class="lang-img"></p>
                <p v-if="store.movieList[index].original_language === 'ja'"><img src="../assets/imgs/jp.png" alt="" class="lang-img"></p>
                <p v-if="store.movieList[index].original_language === 'ru'"><img src="../assets/imgs/ru.png" alt="" class="lang-img"></p>
                <p v-else>{{ "Lingua: " + store.movieList[index].original_language }}</p>
                <p>{{ "Voto: " + numberArray[index] }}</p>

                <div class="card">
                    <img :src="`https://image.tmdb.org/t/p/w342/${store.movieList[index].poster_path}`" alt="">
                </div>
            </div>
        </li>
    </ul>

    <ul class="tv-series">
        <li v-for="(series, index) in store.tvSeriesList">
            <div>
                <h1>Serie tv</h1>
                <p>{{"Titolo: " + store.tvSeriesList[index].name}}</p>
                <p> {{" Titolo originale: " + store.tvSeriesList[index].original_name}}</p>
                <p v-if="store.tvSeriesList[index].original_language === 'en'"><img src="../assets/imgs/eng.png" alt="" class="lang-img"></p>
                <p v-if="store.tvSeriesList[index].original_language === 'it'"><img src="../assets/imgs/it.png" alt="" class="lang-img"></p>
                <p v-if="store.tvSeriesList[index].original_language === 'ja'"><img src="../assets/imgs/jp.png" alt="" class="lang-img"></p>
                <p v-if="store.tvSeriesList[index].original_language === 'ru'"><img src="../assets/imgs/ru.png" alt="" class="lang-img"></p>
                <p v-else>{{ "Lingua: " + store.tvSeriesList[index].original_language }}</p>
                <p>{{ "Voto: " + numberArray[index] }}</p>
                
                <div class="card">
                    <img :src="`https://image.tmdb.org/t/p/w342/${store.tvSeriesList[index].poster_path}`" alt="">
                </div>
            </div>
            
        </li>
    </ul>
</template>

<script>
import Searchbar from "./Searchbar.vue"
import {store} from "../store.js"

import axios from 'axios';
//https://api.themoviedb.org/3/search/tv
export default {
    name: "AppMain",
    data(){
        return{
            searched: "",
            numberArray: [],
            store
        }
    },
    components: {
        Searchbar,
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
        },
        convertNumber(){
            this.store.tvSeriesList.forEach(el =>{
                this.numberArray.push(Math.round((el.vote_average / 10) *5));
            });
        }
    },
    beforeUpdate(){
        this.convertNumber();
    }
}
</script>

<style scoped lang="scss">
    ul{
        margin: 1rem;
        li{
            div{
                margin: 1rem;
                img.lang-img{
                    width: 2%;
                }
                div.card{
                    margin: 2rem 0;
                    img{
                        width: 50%;
                    }
                }
            }
        }
    }

    ul.tv-series{
        margin-top: 5rem;
    }

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