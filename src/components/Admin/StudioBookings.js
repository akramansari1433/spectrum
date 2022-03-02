import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageBox from "../../utils/MessageBox";

function StudioBookings() {
   const [bookings, setBookings] = useState([]);

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
         .delete(`/booking/studio/${id}`)
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
         .get("/booking/getStudioBookings")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setBookings(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <h1 className="display-4 text-center py-3">Bookings</h1>

         {loadingData ? (
            <p className="text-center h4">Loading...</p>
         ) : (
            <div style={{ overflow: "auto", width: "95vw", margin: "auto" }}>
               <table className="table table-striped">
                  <thead className="thead-dark">
                     <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">PaymentId</th>
                        <th scope="col">Amount Paid</th>
                        <th scope="col"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {bookings.map((b) => (
                        <tr key={b.bookingId}>
                           <td>{b.date}</td>
                           <td>{b.name}</td>
                           <td>{b.email}</td>
                           <td>{b.phone}</td>
                           <td>{b.paymentId}</td>
                           <td>{b.amount}</td>
                           <td>
                              <button
                                 style={{
                                    border: "none",
                                    background: "transparent",
                                 }}
                                 disabled={loading}
                                 className="h4 px-3 text-dark"
                                 onClick={() => handleDelete(b.bookingId)}
                              >
                                 <i className="bi bi-trash text-danger" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         )}

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
         />
      </div>
   );
}

export default StudioBookings;
