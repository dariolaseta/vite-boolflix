<template>
    <div class="cards">
        <div class="card" v-for="(movies, index) in store.movieList">
            <div class="d-none">
                <p>{{"Titolo: " + store.movieList[index].title}}</p>
                <p> {{" Titolo originale: " + store.movieList[index].original_title}}</p>
                <p v-if="store.movieList[index].original_language === 'en'"><img src="../assets/imgs/eng.png" alt="" class="lang-img"></p>
                <p v-if="store.movieList[index].original_language === 'it'"><img src="../assets/imgs/it.png" alt="" class="lang-img"></p>
                <p v-if="store.movieList[index].original_language === 'ja'"><img src="../assets/imgs/jp.png" alt="" class="lang-img"></p>
                <p v-if="store.movieList[index].original_language === 'ru'"><img src="../assets/imgs/ru.png" alt="" class="lang-img"></p>
                <p v-else>{{ "Lingua: " + store.movieList[index].original_language }}</p>
                <p>{{ "Voto: " + numberArray[index] }}</p>
    
            </div>
            <div class="card-img">
                <img :src="`https://image.tmdb.org/t/p/w342/${store.movieList[index].poster_path}`" alt="">
            </div>
        </div>
    
        <div class="card tv" v-for="(series, index) in store.tvSeriesList">
            <div class="d-none">
                <p>{{"Titolo: " + store.tvSeriesList[index].name}}</p>
                <p> {{" Titolo originale: " + store.tvSeriesList[index].original_name}}</p>
                <p v-if="store.tvSeriesList[index].original_language === 'en'"><img src="../assets/imgs/eng.png" alt="" class="lang-img"></p>
                <p v-if="store.tvSeriesList[index].original_language === 'it'"><img src="../assets/imgs/it.png" alt="" class="lang-img"></p>
                <p v-if="store.tvSeriesList[index].original_language === 'ja'"><img src="../assets/imgs/jp.png" alt="" class="lang-img"></p>
                <p v-if="store.tvSeriesList[index].original_language === 'ru'"><img src="../assets/imgs/ru.png" alt="" class="lang-img"></p>
                <p v-else>{{ "Lingua: " + store.tvSeriesList[index].original_language }}</p>
                <p>{{ "Voto: " + numberArray[index] }}</p>
                        
            </div>
            <div class="card-img">
                <img :src="`https://image.tmdb.org/t/p/w342/${store.tvSeriesList[index].poster_path}`" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../store.js"

export default {
    name: "Card",
    data(){
        return{
        searched: "",
        numberArray: [],
        store
        }
    },
    methods:{
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
    div.d-none{
        opacity: 0%;
    }

    div.d-none:hover{
        opacity: 100%;
    }

    ul{
        list-style-type: none;
    }
    div.cards{
        display: flex;
        
        flex-wrap: wrap;
    }
    div.card{
        display: flex;
        height: 60%;
        width: calc(100% / 5);
    }
            div{
                p{
                    margin: 1rem;
                    width: 100%;
                }
                margin: 1rem;
                img.lang-img{
                    width: 20%;
                }
                div.card-img{
                    margin: 2rem 0;
                    img{
                        width: 200px;
                    }
                }
            }
    ul.tv-series{
        margin-top: 5rem;
    }

    p:hover{
        display: block;
    }
</style>