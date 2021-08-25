import React from 'react';
import logo from './logo.png'
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <div>
        <nav className="navbar  navbar-light bg-dark d-flex flex-row-reverse">
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo03" 
                aria-controls="navbarTogglerDemo03" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='p-3'>
                <img src={logo} style={{height:'35px' }} alt='logo'/>
            </div>
            <div className="collapse navbar-collapse text-center" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/porfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )

}

export default Navbar
