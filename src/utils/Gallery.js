import React from "react";

export default function Gallery({ loadingData, images }) {
   return (
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
                     href={i.imageUrl}
                     data-toggle="modal"
                     data-target={`#image${i.imageId}`}
                  >
                     <img
                        src={i.imageUrl}
                        alt="wedding_image"
                        className="image"
                     ></img>
                  </a>
                  <div className="modal fade " id={`image${i.imageId}`}>
                     <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                           <div className="modal-body">
                              <img
                                 src={i.imageUrl}
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
   );
}
