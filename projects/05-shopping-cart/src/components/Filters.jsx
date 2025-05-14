import { useState, useId } from 'react'
import './Filters.css'


export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handelChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handelChangeCategory = (event) => {
        onChange(prevState => ({
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
                />
                <span>${minPrice}</span>
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