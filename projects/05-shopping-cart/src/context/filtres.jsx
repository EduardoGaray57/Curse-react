import { createContext, useState } from "react";


// Este es el contexto que se consume
export const FiltresContext = createContext()

// Este el el que nos provee de acceso al contexto
export function FiltersProvider({ children}) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })
    return(
        <FiltresContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltresContext.Provider>
    )
}