<template>
    <div class="search-bar">
        <input type="text" name="search-bar" id="search-bar" placeholder="Inserisci il titolo di un film" v-model="searchedText" @keyup.enter="$emit('searched', searchedText)">
        <button @click="$emit('searched', searchedText)">Cerca</button>
    </div>
</template>

<script>
export default {
    name: "Searchbar",
    data(){
        return{
            searchedText : "",
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
</style>