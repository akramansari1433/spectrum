import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

function BookStudio() {
   const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
   const [loading, setLoading] = useState(false);

   const handleSumit = (e) => {
      e.preventDefault();
      setLoading(true);
      setLoading(false);
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
            />

            <TextField
               label="Email"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="email"
            />

            <TextField
               label="Mobile"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="tel"
               InputProps={{ inputProps: { minLength: 10, maxLength: 10 } }}
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

export default BookStudio;
