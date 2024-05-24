import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({cartCount}) => {

    // const [count, setCount] = useState(0)
    return (
        <nav className=" px-3 navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    FakeStore
                </Link>
                {/* <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                    <ul className="navbar-nav d-flex w-100  justify-content-between px-3 align-items-center ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home<i class="bi bi-cart"></i>
                            </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to="/cart" className="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                            <span className='card-count-product' style={{
                                color: '#fff',
                                backgroundColor: 'rgb(89 150 200)',
                                borderRadius: '50%',
                                paddingInline: '4px',
                                fontSize: '16px',
                                position: 'absolute',
                                right: '58px',
                                bottom: '24px'
                            }}>{cartCount}</span> </Link>
                        </li>
                    </ul>
                {/* </div> */}
            </div>
        </nav>
    );
}

export default NavBar;
