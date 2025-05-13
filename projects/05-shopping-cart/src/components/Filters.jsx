import { useState } from 'react'
import './Filters.css'


export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)

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
                <label htmlFor="price">Precio a partir de:</label>
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="1000"
                    onChange={handelChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="Category"> Categoria</label>
                <select id="category" onChange={handelChangeCategory}>
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