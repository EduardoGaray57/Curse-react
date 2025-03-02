import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {
    const [ fact,  setFact] = useState()
    const [ imagenUrl, setImagenUrl] = useState()
    const [factError, setFactError] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [])

    useEffect(() => {
        if (!fact) return
        const threefirstWord = fact.split(' ', 3).join(' ')
        console.log(threefirstWord)
        fetch(`https://cataas.com/cat/says/${threefirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const { url } = data
                setImagenUrl(url)
            })
    }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
                {fact && <p>{fact}</p>}
                {imagenUrl &&<img src={imagenUrl} alt={`Image extracted using the 
                    first trhee words for ${fact}`} />}
            </section>
            
        </main>
        
        
    )
}