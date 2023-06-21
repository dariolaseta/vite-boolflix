<template>
    <div class="search-bar">
        <input type="text" name="search-bar" id="search-bar" placeholder="Inserisci il titolo di un film">
        <button>Cerca</button>
    </div>
</template>

<script>
export default {
    name: "Searchbar"
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