import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "5ff5cb721e4e0c6715f673ab11dc491d";
const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseUrl + "&with_genres=" + id);

export default {
    getTrendingVideos,
    getMovieByGenreId
};