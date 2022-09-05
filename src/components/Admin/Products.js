import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardMedia,
   FormControl,
   Grid,
   InputLabel,
   MenuItem,
   Modal,
   Select,
   Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

export default function Products() {
   const [products, setProducts] = useState([]);
   const [product, setProduct] = useState({});
   const [status, setStatus] = useState();
   const [loadingData, setLoadingData] = useState(false);

   const [openModal, setOpenModal] = useState(false);
   const [response, setResponse] = useState();

   const handleSubmit = () => {
      axios
         .post(`/product/updateAvailabilty/${product.productId}`, {
            available: status,
         })
         .then((res) => {
            if (res.data.message) {
               setResponse(res.data.message);
               console.log(response);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };

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

   return (
      <Box p={3}>
         <Typography variant="h3" textAlign="center" pb={3}>
            Products
         </Typography>
         <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="contained" component={Link} to="/admin/addProduct">
               Add New Product
            </Button>
         </Box>
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
                                 setStatus(p.available);
                              }}
                           >
                              Change Status
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
               <form onSubmit={handleSubmit}>
                  <FormControl sx={{ width: "15rem", marginBottom: 3 }}>
                     <InputLabel id="demo-simple-select-label">
                        Status
                     </InputLabel>
                     <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Category"
                        onChange={(e) => {
                           setStatus(e.target.value);
                        }}
                     >
                        <MenuItem value={true}>Available</MenuItem>
                        <MenuItem value={false}>Not Available</MenuItem>
                     </Select>
                  </FormControl>
                  <Button variant="contained" type="submit">
                     Submit
                  </Button>
               </form>
            </Box>
         </Modal>
      </Box>
   );
}
