import axios from "axios";
import React, { useEffect, useState } from "react";

function Photoshoots() {
   const [photoshoots, setPhotoshoots] = useState([]);
   const [loadingData, setLoadingData] = useState(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/booking/getPhotoshoots")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setPhotoshoots(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <h1 className="display-4 text-center py-3">Photoshoots</h1>

         {loadingData ? (
            <p className="text-center h4">Loading...</p>
         ) : (
            <table className="table table-striped">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">Date</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Phone</th>
                     <th scope="col">Category</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  {photoshoots.map((p) => (
                     <tr key={p.photoshootId}>
                        <td>{p.date}</td>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                        <td>{p.category}</td>
                        <td>
                           <button
                              style={{
                                 border: "none",
                                 background: "transparent",
                              }}
                              className="h4 px-3 text-dark"
                              href="https://www.instagram.com/"
                           >
                              <i className="bi bi-trash text-danger" />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </div>
   );
}

export default Photoshoots;
