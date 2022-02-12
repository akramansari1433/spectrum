import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function BookPhotoshoot() {
   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
   const [category, setCategory] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSumit = (e) => {
      e.preventDefault();
      setLoading(true);
      setLoading(false);
      e.target.reset();
   };

   return (
      <div className="px-md-5 px-3">
         <h1 className="text-center display-4 py-3">Book Photoshoot</h1>

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
            />

            <TextField
               label="Email"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="email"
            />

            <TextField
               label="Mobile"
               InputProps={{ inputProps: { minLength: 10, maxLength: 10 } }}
               sx={{ width: "20rem", marginBottom: 3 }}
               type="tel"
               required
               onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                     e.preventDefault();
                  }
               }}
            />

            <TextField
               label="Date"
               type="date"
               min={date}
               defaultValue={date}
               sx={{ width: "20rem", marginBottom: 3 }}
               InputProps={{ inputProps: { min: date } }}
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={(e) => setDate(e.target.value)}
               required
            />
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
            <Button variant="contained" type="submit" color="primary">
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Book"
               )}
            </Button>
         </form>

         <hr className="w-75" />
      </div>
   );
}
