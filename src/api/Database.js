import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_URL ='https://image.tmdb.org/t/p/w500/'



export default axios.create({
    baseURL:BASE_URL
})