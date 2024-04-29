const baseurl = "https://api.themoviedb.org/3";


const API_KEY='f5dbad5951c2922f7254e61a094eb629'


const request={
    fetchTrending:`/trending/movie/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaryMovie:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;