import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 1234 },
    { name: 'Game Of Thrones', price: '$15', id: 1255 },
    { name: 'Inception', price: '$20', id: 1275 }
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}
