import { products as initialProducts} from "./mocks/products.json"
import { Products } from "./components/Products"
import { useState } from "react"
import { Header } from "./components/Header"


function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(products => {
      return(
        products.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          products.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />
    </>
    
  )
}

export default App
