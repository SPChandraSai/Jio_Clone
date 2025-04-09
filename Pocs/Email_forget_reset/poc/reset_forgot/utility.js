const headers = {
    accept: 'application/json',
    // api key
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE5MzEzNjEzNDc0NGY5ZWFhZGVmNGVlMTFkNGJjYSIsIm5iZiI6MTc0Mzg0MzQ2OC44MTksInN1YiI6IjY3ZjBmMDhjZjVhODBhYTU0NTk5ODc1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.urWmzir0nrEm8yeG6eTNjw-52ZoWNe0_8-KHj4aDBPM'
};
const tmdbBASEURL = "https://api.themoviedb.org/3/";
const imageBASEURL = "https://image.tmdb.org/t/p/original/";
const TNDB_ENDPOINT = {
    // Home Page
    fetchcurrentMovies: '/movie/now_playing',
    fetchTrending: '/trending/all/week',
    fetchPopular: '/trending/all/week',
    fetchUpcoming: '/movie/upcoming?include_video=true',
    fetchTopRated: '/movie/top_rated?include_video=true',
    fetchActionMovies: '/discover/movie?language=en-US&with_genres=28',
    fetchComedyMovies: '/discover/movie?language=en-US&with_genres=35',
    fetchHorrorMovies: '/discover/movie?language=en-US&with_genres=27',
    fetchRomanceMovies: '/discover/movie?language=en-US&with_genres=10749',
    fetchAnimeMovies: '/discover/movie?language=en-US&with_genres=16',
    fetchActionTvShows: `/discover/tv?language=en-US&with_genres=10759`,
    fetchComedyTvShows: `/discover/tv?language=en-US&with_genres=35`,
    fetchMysteryTvShows: `/discover/tv?language=en-US&with_genres=9648`,
    fetchDramaTvShows: `/discover/tv?language=en-US&with_genres=18`,
    fetchCrimeTvShows: `/discover/tv?language=en-US&with_genres=80`,
};