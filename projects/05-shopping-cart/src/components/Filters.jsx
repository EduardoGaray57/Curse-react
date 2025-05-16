import { useId } from 'react'
import { useFiltres } from "../hooks/useFilters"
import './Filters.css'


export function Filters() {
    const { filters, setFilters } = useFiltres()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handelChangeMinPrice = (event) => {

        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handelChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <sectio className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handelChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}> Categoria</label>
                <select id={categoryFilterId} onChange={handelChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="beauty">Belleza</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="furniture">Muebles</option>
                    <option value="groceries">Comestibles</option>
                </select>
            </div>
        </sectio>
    )
}