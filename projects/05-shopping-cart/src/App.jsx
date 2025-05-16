import { products as initialProducts } from "./mocks/products.json"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFiltres } from "./hooks/useFilters"


function App() {
  const { filterProducts } = useFiltres()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>

  )
}

export default App
