import axios from "axios";
import React, { useEffect, useState } from "react";
import Gallery from "../../utils/Gallery";

function Archana() {
   const [images, setImages] = useState([]);
   const [loadingData, setLoadingData] = useState(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/image/getMakeup/archana")
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
         <h1 className="text-center display-4 py-3">Archana</h1>

         <Gallery loadingData={loadingData} images={images} />
      </div>
   );
}

export default Archana;
