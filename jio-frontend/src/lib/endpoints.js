export const ENDPOINT = {
    // auth routes
    login: "/auth/login",
    signup: "/auth/signup",
    user: "/user",
    logout: "/auth/logout",
    forgetpassword: "/auth/forgetPassword",
    resetPassword: "/auth/resetPassword",

    // discover routes
    discoverNowPlaying: "/discover/now-playing",
    discoverTrending: "/discover/trending",
    discoverTopRated: "/discover/top-rated",
    discoverUpcoming: "/discover/upcoming",

    // movies routes
    fetchActionMovies: `/movies/action`,
    fetchComedyMovies: `/movies/comedy`,
    fetchHorrorMovies: `/movies/horror`,
    fetchRomanceMovies: `/movies/romance`,
    fetchAnimeNovies: `/movies/anime`,

    // tv shows routes
    fetchActionTvShows: `/tv/action`,
    fetchComedyTvShows: `/tv/comedy`,
    fetchCrimeTvShows: `/tv/crime`,
    fetchDramaTvShows: `/tv/drama`,
    fetchMysteryTvShows: `/tv/mystery`,

    // movie/tv shows details
    getMovieDetails: (id) => `/movies/details?id=${id}`,
    getTvShowsDetails: (id) => `/tv/details?id=$(id)`

}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;