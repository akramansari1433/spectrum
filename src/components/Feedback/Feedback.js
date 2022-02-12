import axios from "axios";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "22rem",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

function Feedback() {
   const [message, setMessage] = useState();
   const [name, setName] = useState();

   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
         .post(
            "https://asia-south1-spectrum-42da3.cloudfunctions.net/api/feedback",
            { message, name }
         )
         .then((res) => {
            if (res.data.message) {
               setLoading(false);
               handleOpen();
               setResponse(res.data.message);
            }
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
               <div className="carousel-item text-center">
                  <i className="h4 text-center">"Best in class"</i>
                  <br />
                  <p className="lead">by john</p>
               </div>
               <div className="carousel-item text-center">
                  <i className="h4 text-center">"Best in class"</i>
                  <br />
                  <p className="lead">by john</p>
               </div>
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

         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <Box sx={style}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  {response}
               </Typography>
               <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Thank you for your valuable feedback.
               </Typography>
               <Button sx={{ marginTop: 2 }} onClick={handleClose}>
                  Close
               </Button>
            </Box>
         </Modal>
      </div>
   );
}

export default Feedback;
