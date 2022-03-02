import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer({ isAdmin }) {
   return !isAdmin ? (
      <div className="py-5">
         <div className="d-flex justify-content-center">
            <a
               className="h2 px-3 text-dark"
               href="https://www.instagram.com/spectrumphotography.in/"
            >
               <i className="bi bi-instagram text-danger"></i>
            </a>
            <a className="h2 px-3 text-dark" href="https://www.youtube.com/">
               <i className="bi bi-youtube text-danger"></i>
            </a>
            <a className="h2 px-3 text-dark" href="https://www.facebook.com/">
               <i className="bi bi-facebook text-primary"></i>
            </a>
         </div>
      </div>
   ) : null;
}

export default Footer;
