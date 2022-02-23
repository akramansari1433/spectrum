import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "../../utils/Carousel";
import Gallery from "../../utils/Gallery";
import img1 from "./Img/1.jpg";
import img2 from "./Img/2.jpg";
import img3 from "./Img/3.jpg";

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
         <Carousel img1={img1} img2={img2} img3={img3} />

         <hr className="w-75 my-4" />

         <Gallery loadingData={loadingData} images={images} />
      </div>
   );
}

export default Wedding;
