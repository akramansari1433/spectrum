import React from "react";
import { Link } from "react-router-dom";

function Nav({ setAdmin }) {
   const handleLogout = () => {
      setAdmin(false);
   };
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <Link className="navbar-brand" to="/admin">
               <h3 className="diplay-4">Admin Dashboard</h3>
            </Link>
            <button
               className="navbar-toggler"
               type="button"
               data-toggle="collapse"
               data-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                     <Link className="nav-link h6" to="/admin/bookings">
                        Bookings
                     </Link>
                  </li>
                  <li className="nav-item active">
                     <Link className="nav-link h6" to="/admin/feedbacks">
                        Feedbacks
                     </Link>
                  </li>
                  <li className="nav-item active">
                     <Link className="nav-link h6" to="/admin/uploadimage">
                        Upload Image
                     </Link>
                  </li>
                  <li className="nav-item active">
                     <Link
                        className="nav-link text-danger h6"
                        to="/admin"
                        onClick={handleLogout}
                     >
                        Logout
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default Nav;
