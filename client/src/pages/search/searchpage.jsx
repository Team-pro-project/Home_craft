import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/products/search`, {
        params: { search: searchQuery },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Search Results for: "{searchQuery}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div className="row">
          {results.map((product) => (
            <div key={product.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={product.imageUrl || "https://via.placeholder.com/150"}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <a href={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchPage;
