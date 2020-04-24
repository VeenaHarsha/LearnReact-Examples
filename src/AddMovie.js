import React, { useState, useContext } from 'react'
import './App.css'
import { MovieContext } from './MovieContext'

function AddMovie () {
  const initValue = ''
  const [movies, setMovies] = useContext(MovieContext)
  const [name, setName] = useState(initValue)
  const [price, setPrice] = useState(initValue)

  const addMovie = (event) => {
    setName(event.target.value)
    setName(initValue)
  }

  const addPrice = (event) => {
    setPrice(event.target.value)
    setPrice(initValue)
  }

  const updateMovieList = (event) => {
    event.preventDefault()
    setMovies(() => [...movies, { name: name, price: price }])
  }

  return (
    <div className='add-movie'>
      <h3>Add Movie</h3>
      <form onSubmit={updateMovieList}>
        <input
          type='text'
          name='movieName'
          value={name}
          placeholder='Movie Name'
          onChange={addMovie}
        />
        <input
          type='text'
          name='price'
          value={price}
          placeholder='Price'
          onChange={addPrice}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddMovie
