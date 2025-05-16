import { useContext } from 'react'
import { FiltresContext } from '../context/filtres.jsx'

export function useFiltres() {
    const { filters, setFilters } = useContext(FiltresContext)

    const filterProducts = (products) => {
        return products.filter(products => {
            return (
                products.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    products.category === filters.category
                )
            )
        })
    }
    return { filters, filterProducts, setFilters }
}