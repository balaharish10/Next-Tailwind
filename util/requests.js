const API_KEY=process.env.API_KEY;
export default {
    fetchTrending : {
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated : {
        title:"Top Rated",
        url :`/movies/top_rated?api_key=${API_KEY}&language=en-US`
    },
    FetchActionMovies : {
        title: "Action Movies",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    FetchComedyMovies : {
        title: "Comedy Movies",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },  

}