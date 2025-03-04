import React from 'react'

function MovieData(props) {
  const movieId = props.params.movieId;
  return (
    <h3>Movie Data Page for: {movieId}</h3>
  )
}

export default MovieData
