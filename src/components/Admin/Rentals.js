import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import MessageBox from "../../utils/MessageBox";
import Button from "@mui/material/Button";
import ReportsRentals from "../../utils/ReportsRentals";

export default function Rentals() {
   const [rentals, setRentals] = useState([]);

   const [loadingData, setLoadingData] = useState(false);
   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => {
      setOpen(false);
      window.location.reload(false);
   };

   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [filteredData, setFilteredData] = useState([]);

   const handleDelete = (id) => {
      axios
         .delete(`/rent/${id}`)
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

   const handleFilter = () => {
      let data = rentals.filter((d) => {
         return startDate <= d.date && d.date <= endDate;
      });
      setFilteredData(data);
   };

   const componentRef = useRef();
   const handlePrint = useReactToPrint({
      content: () => componentRef.current,
   });

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/rent/getRents")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setRentals(res.data);
               setFilteredData(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div>
         <h1 className="display-4 text-center py-3">Rentals</h1>
         <div className="d-flex justify-content-end align-items-center p-3">
            <TextField
               label="Start Date"
               type="date"
               sx={{ marginX: 1 }}
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setStartDate(e.target.value)}
               required
            />
            <TextField
               label="End Date"
               type="date"
               sx={{ marginX: 1 }}
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setEndDate(e.target.value)}
               required
            />
            <Button variant="contained" onClick={handleFilter}>
               Filter
            </Button>
         </div>

         {loadingData ? (
            <p className="text-center h4">Loading...</p>
         ) : (
            <div style={{ overflow: "auto", width: "95vw", margin: "auto" }}>
               <table
                  className="table table-striped"
                  style={{ width: "95vw", margin: "auto" }}
               >
                  <thead className="thead-dark">
                     <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Product</th>
                        <th scope="col">Days</th>
                        <th scope="col">PaymentId</th>
                        <th scope="col">Amount Paid</th>
                        <th scope="col"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {filteredData.map((r) => (
                        <tr key={r.rentId}>
                           <td>{r.date}</td>
                           <td>{r.name}</td>
                           <td>{r.email}</td>
                           <td>{r.phone}</td>
                           <td>{r.product}</td>
                           <td>{r.days}</td>
                           <td>{r.paymentId}</td>
                           <td>{r.amount}</td>
                           <td>
                              <button
                                 style={{
                                    border: "none",
                                    background: "transparent",
                                 }}
                                 disabled={loading}
                                 className="h4 px-3 text-dark"
                                 onClick={() => handleDelete(r.rentId)}
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

         <div className="text-center py-3">
            <Button onClick={handlePrint}>
               <i className="h3 bi-printer-fill" />
            </Button>
            <div style={{ display: "none" }}>
               <ReportsRentals ref={componentRef} data={filteredData} />
            </div>
         </div>

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
         />
      </div>
   );
}
