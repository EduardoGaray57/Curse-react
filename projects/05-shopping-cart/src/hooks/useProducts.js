import { useState, useEffect, useMemo } from 'react'

export function useProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [rawData, setRawData] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setRawData(data)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const transformedProducts = useMemo(() => {
    if (!rawData) return []
    
    return rawData.products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      images: product.images,
      category: product.category
    }))
  }, [rawData])

  return { products: transformedProducts, loading, error }
} 