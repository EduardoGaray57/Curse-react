import { useState, useEffect } from 'react'

export function useCatImage ({fact}) {
    const [ imagenUrl, setImagenUrl] = useState()

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

    return { imagenUrl }
}