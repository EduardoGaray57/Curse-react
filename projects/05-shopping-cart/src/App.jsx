import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFiltres } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"
import { useProducts } from "./hooks/useProducts"
import { useMemo } from "react"

function App() {
  const { filterProducts } = useFiltres()
  const { products, loading, error } = useProducts()

  const filteredProducts = useMemo(() => {
    return filterProducts(products)
  }, [filterProducts, products])

  const loadingMessage = useMemo(() => (
    <div className="loading">
      <div className="loader"></div>
      <p>Cargando productos...</p>
    </div>
  ), [])

  const errorMessage = useMemo(() => error && (
    <div className="error">
      <p>Error al cargar los productos: {error.message}</p>
      <button onClick={() => window.location.reload()}>
        Intentar de nuevo
      </button>
    </div>
  ), [error])

  return (
    <CartProvider>
      <Header />
      <Cart />
      {loading && loadingMessage}
      {error && errorMessage}
      {!loading && !error && <Products products={filteredProducts} />}
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
