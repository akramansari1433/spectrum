import {
   Box,
   Button,
   CircularProgress,
   Input,
   TextField,
   Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import MessageBox from "../../utils/MessageBox";

export default function AddProduct() {
   const [name, setName] = useState();
   const [price, setPrice] = useState();
   const [desc, setDesc] = useState();
   const [deposit, setDeposit] = useState();

   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   let formData = new FormData();
   const handleImageChange = (e) => {
      const image = e.target.files[0];
      formData.append("image", image, image.name);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("deposit", deposit);
      formData.append("desc", desc);
      formData.append("available", true);

      axios
         .post("/product/add", formData)
         .then((res) => {
            if (res.data) {
               setLoading(false);
               setResponse(res.data.message);
               handleOpen();
            }
         })
         .catch((err) => {
            console.log(err);
            setLoading(false);
         });
      e.target.reset();
   };
   return (
      <Box p={3}>
         <Typography variant="h3" mb={3} textAlign="center">
            Add New Product
         </Typography>
         <form
            style={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
            onSubmit={handleSubmit}
         >
            <TextField
               label="Name"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               name="name"
               onChange={(e) => setName(e.target.value)}
            />
            <TextField
               label="Description"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               name="desc"
               onChange={(e) => setDesc(e.target.value)}
            />
            <TextField
               label="Price"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               name="price"
               onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
               label="Deposit"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               name="deposit"
               onChange={(e) => setDeposit(e.target.value)}
            />
            <Input
               accept="image/*"
               htmlFor="contained-button-file"
               multiple
               type="file"
               onChange={handleImageChange}
            />
            <Button
               variant="contained"
               type="submit"
               color="primary"
               sx={{ marginTop: 3 }}
            >
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Submit"
               )}
            </Button>
         </form>
         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
         />
      </Box>
   );
}
