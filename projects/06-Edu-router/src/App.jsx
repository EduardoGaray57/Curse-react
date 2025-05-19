import { useState } from 'react'
import './App.css'

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo para la creación de un React Router desde cero</p>
      <a href="/about">Ir a sobre nosotros</a>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src="https://media.licdn.com/dms/image/v2/D4E35AQEPrXl6l1BtNg/profile-framedphoto-shrink_200_200/B4EZYiDhUuHMAY-/0/1744328070700?e=1748221200&v=beta&t=ReVlyGhN6PDzfTmM9uiU1HdXTBQRY9D2Y-pZkpEMMSw" 
        alt="Foto de Eduardo" />
        <p>Estoy creando un clon de React Router</p>
      </div>
      <a href="/">Ir a la home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return(
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
