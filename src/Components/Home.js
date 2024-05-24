import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Api from './Api';
import Spinner from './Spinner';
const Home = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = new Api();
        const productsData = await api.getPrducts();
        setProducts(productsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
     filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  let filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="container mt-5">
      <nav className="navbar d-felx justify-content-start flex-column">
      
        <form className="form-inline d-flex" style={{
              // position:'absolute',
              // left:'39%'
              }} onSubmit={handleSearchSubmit}>
          <input
            className="form-control mr-3 mr-sm-2"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <a className="navbar-brand title">Product</a>
      </nav>
      {isLoading ? ( 
        <Spinner /> 
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredProducts.map(product => (
            <div key={product.id} className="col">
              <ProductCard data={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
