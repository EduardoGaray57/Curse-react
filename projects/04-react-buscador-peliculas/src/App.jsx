import './App.css'
import { useEffect, useState, useRef } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if(search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if(search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con solo numeros')
      return
    }
    if(search.length < 3) {
      setError('No se puede buscar una pelicula con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() { 
  const { movies: mappedMovies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  

  return(
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...' />  
          <button type='submit'>Buscar</button>
        </form> 
        {error && <p style={{ color: 'red'}}>{error}</p>} 
      </header> 

      <main>
        <Movies movies={mappedMovies} />
      </main>         
    </div>
  ) 
}

export default App
