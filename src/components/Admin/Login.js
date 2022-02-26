import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import axios from "axios";

function Login({ setAdmin }) {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();

   const handleSumit = (e) => {
      e.preventDefault();
      setLoading(true);
      axios
         .post("/admin/login", { username, password })
         .then((res) => {
            if (res.data.message) {
               setLoading(false);
               window.localStorage.setItem("admin", true);
               setAdmin(window.localStorage.getItem("admin"));
               e.target.reset();
               setError("");
            }
         })
         .catch((err) => {
            setError(err.response.data.error);
            setLoading(false);
         });
   };
   return (
      <div>
         <h1 className="text-center display-4 py-3">Admin Login</h1>
         <form
            className="py-3 d-flex flex-column align-items-center"
            onSubmit={handleSumit}
         >
            <TextField
               label="Username"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="text"
               onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
               label="Password"
               sx={{ width: "20rem", marginBottom: 3 }}
               required
               type="password"
               onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="contained" type="submit" color="primary">
               {loading ? (
                  <CircularProgress color="inherit" size={25} />
               ) : (
                  "Login"
               )}
            </Button>

            <p className="text-danger">{error}</p>
         </form>
      </div>
   );
}

export default Login;
