import React from "react";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import AdminNav from "../Admin/AdminNav";

function Navbar({ isAdmin, setAdmin }) {
   const Nav = isAdmin ? (
      <AdminNav setAdmin={setAdmin} />
   ) : (
      <nav className="navbar navbar-expand-lg  navbar-light bg-dark">
         <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="p-3">
            <img src={logo} style={{ height: "35px" }} alt="logo" />
         </div>
         <div
            className="collapse navbar-collapse text-center"
            id="navbarTogglerDemo03"
         >
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
               <li className="nav-item active">
                  <Link className="nav-link text-white" to="/">
                     Home
                  </Link>
               </li>
               <li className="nav-item dropdown ">
                  <a
                     className="nav-link dropdown-toggle text-white"
                     href="/"
                     id="navbarScrollingDropdown"
                     role="button"
                     data-toggle="dropdown"
                     aria-expanded="false"
                  >
                     Portfolio
                  </a>
                  <ul
                     className="dropdown-menu text-center "
                     aria-labelledby="navbarScrollingDropdown"
                  >
                     <li>
                        <Link className="dropdown-item" to="/porfolio/wedding">
                           Weddings
                        </Link>
                     </li>
                     <li>
                        <Link
                           className="dropdown-item"
                           to="/porfolio/prewedding"
                        >
                           Pre-Weddings
                        </Link>
                     </li>
                     <li>
                        <Link className="dropdown-item" to="/porfolio/makeup">
                           Makeup
                        </Link>
                     </li>
                     <li>
                        <a className="dropdown-item" href="/">
                           Fashion & Portraits
                        </a>
                     </li>

                     <li>
                        <a className="dropdown-item" href="/">
                           Baby
                        </a>
                     </li>
                     <li>
                        <a className="dropdown-item" href="/">
                           Products
                        </a>
                     </li>
                  </ul>
               </li>
               {/* <li className="nav-item">
                  <Link className="nav-link text-white" to="/bookphotoshoot">
                     Book Photoshoot
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link text-white" to="/bookstudio">
                     Book Studio
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link text-white" to="/feedback">
                     Feedback
                  </Link>
               </li> */}
               <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                     About Us
                  </Link>
               </li>
            </ul>
         </div>
      </nav>
   );
   return Nav;
}

export default Navbar;
