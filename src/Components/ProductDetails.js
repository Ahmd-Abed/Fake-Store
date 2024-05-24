import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Api from './Api';
import Spinner from './Spinner';
const ProductDetails = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const api = new Api();
        const productData = await api.getProductById(id);
        setProduct(productData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);
  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart(product);
    }
  };
  return (
    <div className="container mt-5">
    {isLoading ? (
      <Spinner />
    ) : product ? (
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} className="img-fluid rounded" alt={product.title} />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h2>{product.title}</h2>
          <h3 className="text-muted">${product.price}</h3>
          <p>{product.description}</p>
          <button
            className="btn btn-primary btn-pulse"
            style={{
              marginTop: '10px',
              alignSelf: 'flex-start',
              borderRadius: '5px',
              padding: '8px 16px',
              fontSize: '16px',
              marginInline: 'auto'
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default ProductDetails;
