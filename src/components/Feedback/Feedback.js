import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import MessageBox from "../../utils/MessageBox";
import { Box, Typography } from "@mui/material";

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
      <Box p={3} textAlign="center">
         <Typography variant="h2">Book Photoshoot</Typography>
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

         <hr style={{ width: "75%" }} />

         <form
            style={{ maxWidth: 350, margin: "auto" }}
            onSubmit={handleSubmit}
         >
            <Typography variant="h5" pb={2}>
               Give your feedback
            </Typography>
            <TextField
               label="Message"
               multiline
               maxRows={5}
               sx={{ marginBottom: 3 }}
               onChange={(e) => setMessage(e.target.value)}
               required
               fullWidth
            />
            <br />
            <TextField
               label="Name"
               variant="outlined"
               onChange={(e) => setName(e.target.value)}
               required
               fullWidth
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

         <hr style={{ width: "75%" }} />

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
            message="Thank you for your valuable feedback."
         />
      </Box>
   );
}

export default Feedback;
