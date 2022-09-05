import React from "react";
import founder from "./Img/founder.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function About() {
   return (
      <div>
         <div className="container p-5">
            <div className="row text-center">
               <div className="col-12 col-md-6 col-sm-12">
                  <img
                     src={founder}
                     alt="founder"
                     className="rounded-circle w-50"
                  />
               </div>
               <div className="col-12 col-md-6 col-sm-12 my-5 py-sm-0 px-4">
                  <h1>Vishwesh Dhanadhare</h1>
                  <h5>Founder & Chief Photoghrapher</h5>
               </div>
            </div>
         </div>

         <hr className="w-75" />

         <h2 className="text-center mt-4">Contact Us</h2>
         <div className="row mx-md-3 mx-1">
            <div className="col-12 col-md-6 col-sm-12">
               <form className="d-flex flex-column align-items-center p-md-3 pd-sm-3 mb-5">
                  <TextField
                     label="Email"
                     sx={{ width: "20rem", marginBottom: 3 }}
                     required
                     type="text"
                     // onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                     label="Subject"
                     sx={{ width: "20rem", marginBottom: 3 }}
                     required
                     type="text"
                     // onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                     label="Query"
                     sx={{ width: "20rem", marginBottom: 3 }}
                     multiline
                     rows={3}
                     required
                     type="text"
                     // onChange={(e) => setName(e.target.value)}
                  />
                  <Button
                     variant="contained"
                     type="submit"
                     sx={{ margin: "auto" }}
                  >
                     Add
                  </Button>
               </form>
            </div>
            <div className="col-12 col-md-6 col-sm-12">
               <div className="p-md-3 pd-sm-3">
                  <div className="flex py-2">
                     <i className="bi bi-envelope-fill h4 text-primary" />
                     <span className="px-3 lead">spectrum@gmail.com</span>
                  </div>
                  <div className="flex py-2">
                     <i className="bi bi-telephone-fill h4 text-success"></i>
                     <span className="px-3 lead">+91 9876543210</span>
                  </div>
                  <div className="flex py-2">
                     <i className="bi bi-geo-alt-fill h4 text-danger"></i>
                     <span className="px-3 lead">
                        Spectrum Studio Ground Floor Meghgiri Hostel
                        <br /> Behind Bank of Maharashtra, Ambegaon(Budruk),
                        <br /> Pune-411046
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
