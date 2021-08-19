import React from 'react';
import logo from './logo.png'



function Navbar() {
    return (
        <div>
        <nav className="navbar  navbar-light bg-dark d-flex flex-row-reverse">
            <button 
                className="navbar-toggler text-left" 
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
                        <a className="nav-link text-white" href="#wfwf">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#jhgdhsd">Albums</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#wfdwqf">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#wfdwqf">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )

}

export default Navbar
