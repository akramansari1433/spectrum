import React from "react";

function Archana() {
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
         <h1 className="text-center display-4 py-3">Archana</h1>

         <div className="flex flex-wrap justify-content-center row mx-2">
            {name.map((name, i) => (
               <div className="col-6 col-md-3 col-lg-3 p-1 p-md-2" key={i}>
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
                                 className="image"
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

export default Archana;
