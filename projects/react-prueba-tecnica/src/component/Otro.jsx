import { useCatImage } from "../hooks/useCatImage"; 

export function Otro() {
    const { imagenUrl } = useCatImage({fact: 'Hola soy un gato'})

    return (
        <>
            <h1>Otro componente</h1>
            {imagenUrl && <img src={imagenUrl} />}
        </>
    )
}