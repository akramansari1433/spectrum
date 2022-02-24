import axios from "axios";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import MessageBox from "../../utils/MessageBox";
import Input from "@mui/material/Input";

function UploadImage() {
   const [category, setCategory] = useState("");
   const [makeupArtist, setMakeupArtist] = useState("");
   const [response, setResponse] = useState();
   const [loading, setLoading] = useState(false);

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   let formData;
   const handleImageChange = (e) => {
      const image = e.target.files[0];
      formData = new FormData();
      formData.append("image", image, image.name);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      if (category === "Wedding") {
         axios.post("/image/uploadWedding", formData).then((res) => {
            if (res.data) {
               setLoading(false);
               setResponse(res.data.message);
               handleOpen();
            }
         });
      } else if (category === "Pre-Wedding") {
         axios.post("/image/uploadPreWedding", formData).then((res) => {
            if (res.data) {
               setLoading(false);
               setResponse(res.data.message);
               handleOpen();
            }
         });
      } else if (category === "Fashion & Portrait") {
         axios.post("/image/uploadFashion&Portrait", formData).then((res) => {
            if (res.data) {
               setLoading(false);
               setResponse(res.data.message);
               handleOpen();
            }
         });
      } else if (category === "Baby") {
         axios.post("/image/uploadBaby", formData).then((res) => {
            if (res.data) {
               setLoading(false);
               setResponse(res.data.message);
               handleOpen();
            }
         });
      } else if (category === "Product") {
         axios.post("/image/uploadProduct", formData).then((res) => {
            if (res.data) {
               setLoading(false);
               setResponse(res.data.message);
               handleOpen();
            }
         });
      } else if (category === "Makeup") {
         if (makeupArtist === "Aishwarya") {
            axios
               .post("/image/uploadMakeup/aishwarya", formData)
               .then((res) => {
                  if (res.data) {
                     setLoading(false);
                     setResponse(res.data.message);
                     handleOpen();
                  }
               });
         } else if (makeupArtist === "Archana") {
            axios.post("/image/uploadMakeup/archana", formData).then((res) => {
               if (res.data) {
                  setLoading(false);
                  setResponse(res.data.message);
                  handleOpen();
               }
            });
         } else if (makeupArtist === "Shreya") {
            axios.post("/image/uploadMakeup/Shreya", formData).then((res) => {
               if (res.data) {
                  setLoading(false);
                  setResponse(res.data.message);
                  handleOpen();
               }
            });
         }
      }
      e.target.reset();
   };

   return (
      <div>
         <h1 className="display-4 text-center py-3">Upload Image</h1>
         <form
            className="py-3 d-flex flex-column align-items-center"
            onSubmit={handleSubmit}
         >
            <FormControl sx={{ width: "20rem", marginBottom: 3 }}>
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

            <FormControl sx={{ width: "20rem", marginBottom: 3 }}>
               <InputLabel
                  id="demo-simple-select-label"
                  hidden={category !== "Makeup"}
               >
                  Makeup Artist
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={makeupArtist}
                  label="Makeup Artist"
                  onChange={(e) => {
                     setMakeupArtist(e.target.value);
                  }}
                  disabled={category !== "Makeup"}
                  hidden={category !== "Makeup"}
               >
                  <MenuItem value="Aishwarya">Aishwarya</MenuItem>
                  <MenuItem value="Archana">Archana</MenuItem>
                  <MenuItem value="Shreya">Shreya</MenuItem>
               </Select>
            </FormControl>

            <Input
               accept="image/*"
               htmlFor="contained-button-file"
               multiple
               type="file"
               onChange={handleImageChange}
            />
            <Button variant="contained" type="submit" sx={{ marginTop: 3 }}>
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Upload"
               )}
            </Button>
         </form>

         <MessageBox
            open={open}
            handleClose={handleClose}
            response={response}
         />
      </div>
   );
}

export default UploadImage;
