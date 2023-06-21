<template>
<Searchbar @searched="searchMovies"/>
<ul>
    <li v-for="(movies, index) in movieList">
        {{movieList[index].original_title}}
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
            api: "https://api.themoviedb.org/3/search/movie?api_key=9cf30d55b864819ac35dd0f7928aab85&query=back"
        }
    },
    components: {
        Searchbar
    },

    methods:{
        searchMovies(needle = ""){
            axios.get(this.api, {
                params:{
                    name: needle
                }
            }).then((response) =>{
                this.movieList = response.data.results;
                console.log(this.movieList);
            })
        }
    },
    created(){
        this.searchMovies();
    }
}
</script>

<style scoped lang="scss">
    
</style>