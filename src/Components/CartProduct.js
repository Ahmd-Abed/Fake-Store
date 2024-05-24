import React from 'react';
import { Link } from 'react-router-dom';
import RemoveImage from '../assets/remove.png'
const CartProduct = ({ cartItems,onRemoveFromCart}) => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Cart</h2>
            {cartItems.length === 0 ? (
                <div className='mx-auto text-center'>
                    <p>No items in the cart</p>
                    <Link to="/" className="btn btn-primary">
                        Go Shopping
                    </Link>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="col">
                            <div className="card h-100">
                                <a href="#" onClick={() => onRemoveFromCart(item.id)}>
                                    <img src={RemoveImage} alt="add image to card" style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px' }} />
                                </a>
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ objectFit: 'contain', height: '200px' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">${item.price}</h6>
                                    <p
                                        className="card-text"
                                        style={{
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '3',
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                    <div className="mt-3">
                                        <Link to={'/product/' + item.id} className="btn btn-primary">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartProduct;
