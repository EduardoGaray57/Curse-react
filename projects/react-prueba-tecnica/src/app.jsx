import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { Otro } from './component/Otro'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App() {       
    const { fact, refreshFact } = useCatFact()
    const { imagenUrl } = useCatImage({fact}) 
    
    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imagenUrl &&<img src={imagenUrl} alt={`Image extracted using the 
                first trhee words for ${fact}`} />}
            
            <Otro />
            <Otro />
            <Otro />
            <Otro />
            
        </main>
        
        
    )
}