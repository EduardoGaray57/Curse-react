import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/movies.jsx'

function App() { 
  const { movies: mappedMovies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log({ query })
  }
  return(
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...' />  
          <button type='submit'>Buscar</button>
        </form>  
      </header> 

      <main>
        <Movies movies={mappedMovies} />
      </main>         
    </div>
  ) 
}

export default App
