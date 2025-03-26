import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import ProductCard from "../../components/ProductCard"

const SearchResults = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get("search") || ""

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This would be replaced with an actual API call
    const fetchSearchResults = async () => {
      setLoading(true)

      // Simulate API call
      setTimeout(() => {
        // Mock data - in a real app, this would come from your API
 

        setResults(mockResults)
        setLoading(false)
      }, 800)
    }

    if (query) {
      fetchSearchResults()
    } else {
      setResults([])
      setLoading(false)
    }
  }, [query])

  return (
    <div className="container py-5">
      <h1 className="mb-4">Search Results for "{query}"</h1>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : results.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {results.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          <p className="lead">No products found matching "{query}"</p>
          <p>Try a different search term or browse our categories.</p>
        </div>
      )}
    </div>
  )
}

export default SearchResults

