async function getMediaList(endpoint) {
    const url = tmdbBASEURL + endpoint;
    const response = await fetch(url, { method: 'GET', headers: headers })
    const data = response.json()
    return data
}

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