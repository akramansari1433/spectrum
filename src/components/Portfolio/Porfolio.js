import React from "react";
import { Link } from "react-router-dom";
import img1 from "./Img/1.jpg";
import img2 from "./Img/2.jpg";

function Porfolio() {
   return (
      <div>
         <h1 className="display-4 text-center p-2">Photography Album</h1>
         <div className="p-3 d-flex flex-wrap justify-content-center">
            <Link
               to="/porfolio/wedding"
               style={{ textDecoration: "none", color: "black" }}
            >
               <div className="m-3 card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={img1} alt="#Card" />
                  <div className="card-body text-center">
                     <h5 className="card-title">Weddings</h5>
                  </div>
               </div>
            </Link>
            <Link
               to="/porfolio/wedding"
               style={{ textDecoration: "none", color: "black" }}
            >
               <div className="m-3 card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={img2} alt="#Card" />
                  <div className="card-body text-center">
                     <h5 className="card-title">Fashion & Portraits</h5>
                  </div>
               </div>
            </Link>
            <Link
               to="/porfolio/wedding"
               style={{ textDecoration: "none", color: "black" }}
            >
               <div className="m-3 card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={img1} alt="#Card" />
                  <div className="card-body text-center">
                     <h5 className="card-title">Baby</h5>
                  </div>
               </div>
            </Link>
            <Link
               to="/porfolio/wedding"
               style={{ textDecoration: "none", color: "black" }}
            >
               <div className="m-3 card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={img1} alt="#Card" />
                  <div className="card-body text-center">
                     <h5 className="card-title">Products</h5>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
}

export default Porfolio;
