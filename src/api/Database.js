import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'




export default axios.create({
    baseURL:BASE_URL
})