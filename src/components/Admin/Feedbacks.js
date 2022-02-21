import axios from "axios";
import React, { useEffect, useState } from "react";

function Feedbacks() {
   const [feedbacks, setFeedbacks] = useState([]);
   const [loadingData, setLoadingData] = useState(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/feedback/getFeedbacks")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setFeedbacks(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <h1 className="display-4 text-center py-3">Feedbacks</h1>

         {loadingData ? (
            <p className="text-center h4">Loading...</p>
         ) : (
            <table className="table table-striped">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">Message</th>
                     <th scope="col">Name</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  {feedbacks.map((f) => (
                     <tr key={f.feedbackId}>
                        <td>{f.message}</td>
                        <td>{f.name}</td>
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

export default Feedbacks;
