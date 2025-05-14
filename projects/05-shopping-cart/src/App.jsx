import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"


function useFiltres() {
  
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

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
  return{ filters ,filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filters ,filterProducts, setFilters } = useFiltres()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filter={filters}/>}
    </>

  )
}

export default App
