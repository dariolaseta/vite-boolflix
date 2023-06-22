import { reactive } from "vue";

export const store = reactive({
    searchText: "",
    movieList: [],
    tvSeriesList: []
});