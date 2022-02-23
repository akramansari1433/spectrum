import React from "react";

export default function Carousel({ img1, img2, img3 }) {
   return (
      <div
         id="carouselExampleIndicators"
         className="carousel slide"
         data-ride="carousel"
      >
         <ol className="carousel-indicators">
            <li
               data-target="#carouselExampleIndicators"
               data-slide-to="0"
               className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div className="carousel-inner px-3 px-md-5 px-lg-5">
            <div className="carousel-item active">
               <img src={img1} className="d-block cover" alt="..." />
            </div>
            <div className="carousel-item">
               <img src={img2} className="d-block cover" alt="..." />
            </div>
            <div className="carousel-item">
               <img src={img3} className="d-block cover" alt="..." />
            </div>
         </div>
         <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
         >
            <span
               className="carousel-control-prev-icon"
               aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
         </a>
         <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
         >
            <span
               className="carousel-control-next-icon"
               aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
         </a>
      </div>
   );
}
