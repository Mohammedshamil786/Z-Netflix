import axios from "axios";
const tmdbAxiosinstance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default tmdbAxiosinstance;