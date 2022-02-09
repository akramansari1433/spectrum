import React from "react";

export default function BookPhotoshoot() {
   const today = new Date().toISOString().split("T")[0];

   const handleSumit = (e) => {
      e.preventDefault();
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

            <div className="d-flex">
               <p className="h5 pr-3">Name:</p>
               <input type="text" placeholder="Name" required />
            </div>

            <div className="d-flex  mt-3">
               <p className="h5 pr-3">Email:</p>
               <input type="email" placeholder="Email" required />
            </div>

            <div className="d-flex  mt-3">
               <p className="h5 pr-3">Mobile:</p>
               <input
                  type="tel"
                  maxLength="10"
                  minLength="10"
                  placeholder="Mobile number"
                  required
               />
            </div>

            <div className="d-flex mt-3">
               <p className="h5 pr-3">Date:</p>
               <input type="date" min={today} required />
            </div>

            <div className="d-flex mt-3">
               <p className="h5 pr-3">Category:</p>
               <select
                  id="category"
                  name="choose"
                  //   onChange=""
               >
                  <option disabled>Choose category</option>
                  <option>Wedding</option>
                  <option>Pre-Wedding</option>
                  <option>Fashion & Portrait</option>
                  <option>Makeup</option>
                  <option>Baby</option>
                  <option>Product</option>
               </select>
            </div>

            <button className="btn btn-danger my-3 px-5" type="submit">
               Book
            </button>
         </form>

         <hr className="w-75" />
      </div>
   );
}
