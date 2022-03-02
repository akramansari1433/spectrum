import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import axios from "axios";
import MessageBox from "../../utils/MessageBox";

function BookStudio() {
   let today = new Date().toISOString().split("T")[0];

   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [date, setDate] = useState(today);

   const [amount] = useState(1000);

   const [response, setResponse] = useState();
   const [error, setError] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const loadScript = (src) => {
      return new Promise((resolve) => {
         const script = document.createElement("script");
         script.src = src;

         script.onload = () => {
            resolve(true);
         };

         script.onerror = () => {
            resolve(false);
         };

         document.body.appendChild(script);
      });
   };

   const displayRazorpay = async () => {
      const res = await loadScript(
         "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
         alert("You are offline. Failed to load Razorpay.");
         return;
      }

      const options = {
         key: "rzp_test_FMb8kaVR7nUUN4",
         currency: "INR",
         amount: amount * 100,
         name: "Spectrum Photography and Films",
         description: "Booking payment",
         image: "",

         handler: function (response) {
            alert("Payment Successfull!");
            axios
               .post("/booking/studio", {
                  name,
                  email,
                  phone,
                  date,
                  amount,
                  paymentId: response.razorpay_payment_id,
               })
               .then((res) => {
                  if (res.data.message) {
                     setLoading(false);
                     handleOpen();
                     setResponse(res.data.message);
                     setError("");
                  }
               })
               .catch((err) => {
                  console.log(err);
                  setLoading(false);
               });
         },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
   };

   const handleSumit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
         .get(`/booking/studioAvailability/${date}`)
         .then((res) => {
            if (res.data.message) {
               displayRazorpay();
            }
         })
         .catch((err) => {
            setError(err.response.data.error);
            setLoading(false);
         });

      e.target.reset();
   };

   return (
      <div className="px-md-5 px-3">
         <h1 className="text-center display-4 py-3">Book studio</h1>

         <hr className="w-75" />

         <form
            className="py-3 d-flex flex-column align-items-center"
            onSubmit={handleSumit}
         >
            <h2 className="py-3">Enter details:</h2>

            <TextField
               label="Name"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               onChange={(e) => setName(e.target.value)}
            />

            <TextField
               label="Email"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="email"
               onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
               label="Phone"
               InputProps={{ inputProps: { minLength: 10, maxLength: 10 } }}
               sx={{ width: "20rem", marginBottom: 3 }}
               type="tel"
               required
               onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                     e.preventDefault();
                  }
               }}
               onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
               label="Date"
               type="date"
               sx={{ width: "20rem", marginBottom: 3 }}
               InputProps={{ inputProps: { min: today } }}
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setDate(e.target.value)}
               required
            />

            <Button variant="contained" type="submit" color="primary">
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Book"
               )}
            </Button>

            <p className="text-danger">{error}</p>
         </form>

         <hr className="w-75" />

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
            message="Thank you for choosing us."
         />
      </div>
   );
}

export default BookStudio;
