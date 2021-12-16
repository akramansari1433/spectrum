import React from "react";
import { Link } from "react-router-dom";
import Aishwarya from "./Img/Aishwarya.jpg";
import Archana from "./Img/Archana.jpg";
import Shreya from "./Img/Shreya.jpg";

function Makeup() {
   return (
      <div>
         <h1 className="text-center display-4 py-3">Makeup Albums</h1>
         <div className="row justify-content-center">
            <div className="card mx-3 mt-2" style={{ width: "16rem" }}>
               <img className="card-img-top" src={Aishwarya} alt="CardImage" />
               <div className="card-body">
                  <h5 className="card-title">Aishwarya Palesha</h5>
                  <Link to="/porfolio/aishwarya" className="btn btn-primary">
                     View More
                  </Link>
               </div>
            </div>

            <div className="card mx-3 mt-2" style={{ width: "16rem" }}>
               <img className="card-img-top" src={Archana} alt="CardImage" />
               <div className="card-body">
                  <h5 className="card-title">Archana</h5>
                  <Link to="/porfolio/archana" className="btn btn-primary">
                     View More
                  </Link>
               </div>
            </div>

            <div className="card mx-3 mt-2" style={{ width: "16rem" }}>
               <img className="card-img-top" src={Shreya} alt="CardImage" />
               <div className="card-body">
                  <h5 className="card-title">Shreya Deshmukh</h5>
                  <Link to="/porfolio/shreya" className="btn btn-primary">
                     View More
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Makeup;
