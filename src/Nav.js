import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import './App.css'
function Nav () {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div className='Nav'>
      <h3>My WatchList</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  )
}

export default Nav
