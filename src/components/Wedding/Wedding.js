import React from "react";
import img1 from "./Img/Cover/1.jpg";
import img2 from "./Img/Cover/2.jpg";
import img3 from "./Img/Cover/3.jpg";
import "./Wedding.css";

function Wedding() {
   const name = [];
   function importAll(r) {
      let images = {};
      r.keys().forEach((item, index) => {
         images[item.replace("./", "")] = r(item);
         name.push(index);
      });
      return images;
   }
   const images = importAll(
      require.context("./Img", false, /\.(png|jpe?g|svg)$/)
   );
   return (
      <div>
         <h1 className="text-center display-4">Wedding Album</h1>
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
               <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
               ></li>
               <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
               ></li>
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
         <hr className="w-75 my-4" />
         <div className="flex flex-wrap justify-content-center">
            {name.map((name, i) => (
               <div className="col-6 col-md-3 col-lg-3 p-3" key={i}>
                  <a
                     href={images[`${name}.jpg`].default}
                     data-toggle="modal"
                     data-target={`#image${name}`}
                  >
                     <img
                        src={images[`${name}.jpg`].default}
                        alt="wedding_image"
                        className="image"
                     ></img>
                  </a>
                  <div className="modal fade " id={`image${name}`}>
                     <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           <div className="modal-body">
                              <img
                                 src={images[`${name}.jpg`].default}
                                 alt=""
                              ></img>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Wedding;
