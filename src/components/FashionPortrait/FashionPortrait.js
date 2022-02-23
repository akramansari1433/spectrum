import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "./Img/Cover/1.jpg";
import img2 from "./Img/Cover/2.jpg";
import img3 from "./Img/Cover/3.jpg";
import Carousel from "../../utils/Carousel";
import Gallery from "../../utils/Gallery";

function FashionPortrait() {
   const [images, setImages] = useState([]);
   const [loadingData, setLoadingData] = useState(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/image/getFashion&Portraits")
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
         <h1 className="text-center display-4 py-3">Fashion & Portrait</h1>

         <Carousel img1={img1} img2={img2} img3={img3} />

         <hr className="w-75 my-4" />

         <Gallery loadingData={loadingData} images={images} />
      </div>
   );
}

export default FashionPortrait;
