const express = require("express");
const { getCurrentMovies, getTopRatedMovies, getUpcomingMovies } = require("../controllers/MovieController");
const MovieRouter = express.Router();

MovieRouter.get("/currentPlaying", getCurrentMovies);
MovieRouter.get("/topRated", getTopRatedMovies);
MovieRouter.get("/upcoming", getUpcomingMovies);

module.exports = MovieRouter;