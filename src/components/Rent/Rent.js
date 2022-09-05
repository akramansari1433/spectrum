import {
   Box,
   Button,
   ButtonGroup,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   CircularProgress,
   Grid,
   Modal,
   TextField,
   Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MessageBox from "../../utils/MessageBox";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 350,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function Rent() {
   let today = new Date().toISOString().split("T")[0];

   const [products, setProducts] = useState([]);
   const [product, setProduct] = useState({});
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [phone, setPhone] = useState();
   const [date, setDate] = useState(today);
   const [amount, setAmount] = useState();
   const [days, setDays] = useState(1);
   const [loadingData, setLoadingData] = useState(false);

   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);

   const [openModal, setOpenModal] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   useEffect(() => {
      setLoadingData(true);
      axios
         .get("/product/getProducts")
         .then((res) => {
            if (res.data) {
               setLoadingData(false);
               setProducts(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const handleIncrement = () => {
      setDays(days + 1);
   };

   const handleDecrement = () => {
      setDays(days - 1);
   };

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
               .post("/rent", {
                  name,
                  email,
                  phone,
                  date,
                  product: product.name,
                  days,
                  amount,
                  paymentId: response.razorpay_payment_id,
               })
               .then((res) => {
                  if (res.data.message) {
                     setLoading(false);
                     setResponse(res.data.message);
                     setOpenModal(false);
                     handleOpen();
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

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      displayRazorpay();

      e.target.reset();
   };

   return (
      <Box px={5}>
         <Typography
            variant="h2"
            color="inherit"
            sx={{ textAlign: "center", marginY: 2 }}
         >
            Rent Out
         </Typography>

         <Grid container justifyContent="center" spacing={3}>
            {!loadingData ? (
               products.map((p) => (
                  <Grid item key={p.productId}>
                     <Card sx={{ maxWidth: 300, position: "relative" }}>
                        {!p.available && (
                           <Typography
                              variant="body1"
                              color="red"
                              bgcolor="white"
                              width="100%"
                              textAlign="center"
                              sx={{
                                 position: "absolute",
                                 top: "20%",
                                 left: "50%",
                                 transform: "translate(-50%, -50%)",
                                 opacity: "1",
                              }}
                           >
                              NOT AVAILABLE
                           </Typography>
                        )}

                        <CardMedia>
                           <img
                              src={p.imageUrl}
                              alt="GoPro"
                              style={{
                                 objectFit: "cover",
                                 width: "280px",
                                 height: "200px",
                                 padding: "5px",
                              }}
                           />
                        </CardMedia>

                        <CardContent>
                           <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                           >
                              {p.name}
                           </Typography>

                           <Typography variant="body2" color="text.secondary">
                              {p.desc}
                           </Typography>
                           <Typography mt={2} variant="h6" color="red">
                              ₹{p.price}/day
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Button
                              color="info"
                              variant="contained"
                              onClick={() => {
                                 setOpenModal(true);
                                 setProduct(p);
                                 console.log(product.name);
                              }}
                              disabled={!p.available}
                           >
                              Rent
                           </Button>
                        </CardActions>
                     </Card>
                  </Grid>
               ))
            ) : (
               <Typography>Loading...</Typography>
            )}
         </Grid>

         <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box sx={style}>
               <Typography variant="h6" mb={1}>
                  Enter Details:
               </Typography>
               <form onSubmit={handleSubmit}>
                  <TextField
                     label="Name"
                     sx={{ width: "15rem", marginBottom: 2 }}
                     required
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                  />

                  <TextField
                     label="Email"
                     sx={{ width: "15rem", marginBottom: 2 }}
                     required
                     type="email"
                     onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                     label="Phone"
                     InputProps={{
                        inputProps: { minLength: 10, maxLength: 10 },
                     }}
                     sx={{ width: "15rem", marginBottom: 2 }}
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
                     sx={{ width: "15rem", marginBottom: 2 }}
                     InputProps={{ inputProps: { min: today } }}
                     InputLabelProps={{
                        shrink: true,
                     }}
                     fullWidth
                     onChange={(e) => setDate(e.target.value)}
                     required
                  />
                  <Typography>Days:</Typography>
                  <ButtonGroup size="small">
                     <Button
                        variant="contained"
                        onClick={handleIncrement}
                        disabled={days >= 10}
                     >
                        +
                     </Button>
                     <Button disabled>{days}</Button>
                     <Button
                        variant="contained"
                        onClick={handleDecrement}
                        disabled={days <= 1}
                     >
                        -
                     </Button>
                  </ButtonGroup>
                  <br />
                  <Button
                     variant="outlined"
                     sx={{ marginTop: 2 }}
                     type="submit"
                     onClick={() => setAmount(days * product.price)}
                  >
                     {loading ? (
                        <CircularProgress color="inherit" size={25} />
                     ) : (
                        "Pay ₹" + days * product.price
                     )}
                  </Button>
               </form>
            </Box>
         </Modal>
         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
            message="Thank you for choosing us."
         />
      </Box>
   );
}
