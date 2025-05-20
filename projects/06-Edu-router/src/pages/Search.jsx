import { useEffect } from "react"

export default function SearchPage ({routerParams}) {
    useEffect(() => {
        document.title = `Has buscando ${routerParams.query}`
    }, [])

    return (
        <h1>Has buscado {routerParams.query}</h1>
    )
}
