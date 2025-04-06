import { useEffect, useState } from 'react'
import { getRandonFact } from '../services/facts'

export function useCatFact () {
    const [ fact,  setFact] = useState()

    const refreshFact = () => {
        getRandonFact().then(newFact => setFact(newFact))
    }

    useEffect(refreshFact,[])

    return { fact, refreshFact }
}