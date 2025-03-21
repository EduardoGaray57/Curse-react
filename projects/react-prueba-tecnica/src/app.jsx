import { useEffect, useState } from "react"
import './App.css'
import { getRandonFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [ fact,  setFact] = useState()
    const { imagenUrl } = useCatImage({fact})    

    useEffect(() => {
        getRandonFact().then(newFact => setFact(newFact))
    },[])
    
    const handleClick = async () => {
        const newFact = await getRandonFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imagenUrl &&<img src={imagenUrl} alt={`Image extracted using the 
                first trhee words for ${fact}`} />}
                    
        </main>
        
        
    )
}