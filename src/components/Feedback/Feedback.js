import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import MessageBox from "../../utils/MessageBox";

function Feedback() {
   const [message, setMessage] = useState();
   const [name, setName] = useState();

   const [feedbacks, setFeedbacks] = useState([]);

   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);
   const [loadingData, setLoadingData] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
         .post("/feedback", { message, name })
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
      e.target.reset();
   };

   return (
      <div>
         <h1 className="text-center display-4 py-3">Feedbacks</h1>
         <div
            id="carouselExampleControls"
            className="carousel slide p-2"
            data-ride="carousel"
         >
            <div className="carousel-inner bg-secondary text-white py-3">
               <div className="carousel-item active text-center px-3">
                  <i className="h4 text-center">
                     "Best Studio and high skilled photographers"
                  </i>
                  <br />
                  <p className="lead">by Akram</p>
               </div>
               {!loadingData ? (
                  feedbacks.map((f) => (
                     <div
                        className="carousel-item text-center"
                        key={f.feedbackId}
                     >
                        <i className="h4 text-center">{f.message}</i>
                        <br />
                        <p className="lead">by {f.name}</p>
                     </div>
                  ))
               ) : (
                  <p className="text-center">Loading...</p>
               )}
            </div>
            <a
               className="carousel-control-prev"
               href="#carouselExampleControls"
               role="button"
               data-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Previous</span>
            </a>
            <a
               className="carousel-control-next"
               href="#carouselExampleControls"
               role="button"
               data-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Next</span>
            </a>
         </div>

         <hr className="w-75" />

         <form
            className="text-center py-3 mt-3 border-dark mx-md-5 mx-3"
            onSubmit={handleSubmit}
         >
            <h2 className=" pb-3">Give your feedback</h2>
            <TextField
               label="Message"
               multiline
               maxRows={5}
               sx={{ width: "20rem", marginBottom: 3 }}
               onChange={(e) => setMessage(e.target.value)}
               required
            />
            <br />
            <TextField
               label="Name"
               variant="outlined"
               sx={{ width: "20rem" }}
               onChange={(e) => setName(e.target.value)}
               required
            />
            <br />
            <Button
               variant="contained"
               sx={{ marginTop: 2 }}
               type="submit"
               color="primary"
            >
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Submit"
               )}
            </Button>
         </form>

         <hr className="w-75" />

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
            message="Thank you for your valuable feedback."
         />
      </div>
   );
}

export default Feedback;
