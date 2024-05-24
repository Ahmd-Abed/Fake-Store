import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddImage from '../assets/plus.png';
const ProductCard = (props) => {
  const [data, setData] = useState({
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
  });

  useEffect(() => {
    setData(props.data);
  }, [props.data,]);

  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart(data);
    }
  };

  return (
    <div className="card h-100">
      <a href="#" onClick={handleAddToCart}>
        <img src={AddImage} alt="add image to card" style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px' }} />
      </a>
      <img src={data.image} className="card-img-top" alt={data.title} style={{ objectFit: 'contain', height: '200px' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}>{data.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${data.price}</h6>
        <p className="card-text" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
          {data.description}
        </p>
        <div className="mt-3 mx-auto">
          <Link to={'/product/' + data.id} className="btn btn-primary">Read more</Link>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
