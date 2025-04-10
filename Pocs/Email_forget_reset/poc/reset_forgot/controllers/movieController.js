const { getMediaList } = require("../utility");


async function getCurrentMovies(req, res) {
    // db vaala kaam ho raha hy idhr
    const currentMovieList = await getMediaList(TNDB_ENDPOINT.fetchcurrentMovies);
    res.status(200).json({
        status: "success",
        message: currentMovieList
    })
}

async function getTopRatedMovies(req, res) {
    const TopRatedMovies = await getMediaList(TNDB_ENDPOINT.fetchTopRated);
    res.status(200).json({
        status: "success",
        message: TopRatedMovies
    })
}

async function getUpcomingMovies(req, res) {
    const upcomingMovies = await getMediaList(TNDB_ENDPOINT.fetchUpcoming);
    res.status(200).json({
        status: "success",
        message: upcomingMovies
    })
}

module.exports={
    getCurrentMovies, getTopRatedMovies, getUpcomingMovies
}
