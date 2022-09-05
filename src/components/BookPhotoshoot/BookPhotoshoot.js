import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import axios from "axios";
import MessageBox from "../../utils/MessageBox";
import { Box, Typography } from "@mui/material";

export default function BookPhotoshoot() {
   let today = new Date().toISOString().split("T")[0];

   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [date, setDate] = useState(today);
   const [category, setCategory] = useState("");

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
               .post("/booking/photoshoot", {
                  name,
                  email,
                  phone,
                  date,
                  category,
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
         .get(`/booking/photoshootAvailability/${date}`)
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
      <Box p={3} textAlign="center">
         <Typography variant="h2">Book Photoshoot</Typography>

         <hr style={{ width: "75%" }} />

         <form style={{ maxWidth: 350, margin: "auto" }} onSubmit={handleSumit}>
            <Typography variant="h5" pb={2}>
               Enter details:
            </Typography>

            <TextField
               label="Name"
               sx={{ marginBottom: 3 }}
               required
               type="text"
               fullWidth
               onChange={(e) => setName(e.target.value)}
            />

            <TextField
               label="Email"
               sx={{ marginBottom: 3 }}
               required
               type="email"
               fullWidth
               onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
               label="Phone"
               InputProps={{ inputProps: { minLength: 10, maxLength: 10 } }}
               sx={{ marginBottom: 3 }}
               type="tel"
               required
               onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                     e.preventDefault();
                  }
               }}
               fullWidth
               onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
               label="Date"
               type="date"
               sx={{ marginBottom: 3 }}
               InputProps={{ inputProps: { min: today } }}
               InputLabelProps={{
                  shrink: true,
               }}
               fullWidth
               onChange={(e) => setDate(e.target.value)}
               required
            />
            <FormControl sx={{ marginBottom: 3 }} fullWidth>
               <InputLabel id="demo-simple-select-label">Category</InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e) => {
                     setCategory(e.target.value);
                  }}
               >
                  <MenuItem value="Wedding">Wedding</MenuItem>
                  <MenuItem value="Pre-Wedding">Pre-Wedding</MenuItem>
                  <MenuItem value="Fashion & Portrait">
                     Fashion & Portrait
                  </MenuItem>
                  <MenuItem value="Makeup">Makeup</MenuItem>
                  <MenuItem value="Baby">Baby</MenuItem>
                  <MenuItem value="Product">Product</MenuItem>
               </Select>
            </FormControl>
            <Button variant="contained" type="submit" color="primary">
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Book"
               )}
            </Button>

            <Typography>{error}</Typography>
         </form>

         <hr style={{ width: "75%" }} />

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
            message="Thank you for choosing us."
         />
      </Box>
   );
}
