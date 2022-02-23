import axios from "axios";
import React, { useEffect, useState } from "react";
import img1 from "./Img/Cover/1.jpg";
import img2 from "./Img/Cover/2.jpg";
import img3 from "./Img/Cover/3.jpg";
import "./Wedding.css";

function Wedding() {
   const [images, setImages] = useState([]);
   const [loadingData, setLoadingData] = useState(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/image/getWeddings")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setImages(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div>
         <h1 className="text-center display-4 py-3">Wedding Album</h1>
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

         <div className="flex flex-wrap justify-content-center row mx-2">
            {loadingData ? (
               <p className="h4">Loading...</p>
            ) : (
               images.map((i) => (
                  <div
                     className="col-6 col-md-3 col-lg-3 p-1 p-md-2"
                     key={i.imageId}
                  >
                     <a
                        href={i.Image}
                        data-toggle="modal"
                        data-target={`#image${i.imageId}`}
                     >
                        <img
                           src={i.Image}
                           alt="wedding_image"
                           className="image"
                        ></img>
                     </a>
                     <div className="modal fade " id={`image${i.imageId}`}>
                        <div className="modal-dialog modal-dialog-centered">
                           <div className="modal-content">
                              <div className="modal-body">
                                 <img
                                    src={i.Image}
                                    alt=""
                                    className="image"
                                 ></img>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            )}
         </div>
      </div>
   );
}

export default Wedding;
