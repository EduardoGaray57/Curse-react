import './Filters.css'

export function Filters() {
    return (
        <sectio className="filters">
            <div>
                <label htmlFor="price">Price</label>
                <input
                    type="range"
                    id="price"
                    min="0"
                    max="1000"
                />
            </div>

            <div>
                <label htmlFor="Category"> Categoria</label>
                <select id="category">
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