import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageBox from "../../utils/MessageBox";

function Feedbacks() {
   const [feedbacks, setFeedbacks] = useState([]);

   const [loadingData, setLoadingData] = useState(false);
   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => {
      setOpen(false);
      window.location.reload(false);
   };

   const handleDelete = (id) => {
      axios
         .delete(`/feedback/${id}`)
         .then((res) => {
            if (res.data.message) {
               setLoading(false);
               handleOpen();
               setResponse(res.data.message);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };

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
                              disabled={loading}
                              className="h4 px-3 text-dark"
                              onClick={() => handleDelete(f.feedbackId)}
                           >
                              <i className="bi bi-trash text-danger" />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
         />
      </div>
   );
}

export default Feedbacks;
