import React, { useState } from "react";

function Booking() {
   const today = new Date().toISOString().split("T")[0];
   const [slot1, setSlot1] = useState(false);
   const [slot2, setSlot2] = useState(false);
   const [slot3, setSlot3] = useState(false);

   const handleSumit = (e) => {
      e.preventDefault();
      if (!slot1 && !slot2 && !slot3) {
         alert("Please choose time!");
      } else {
         console.log("Booked");
      }
   };

   return (
      <div className="px-md-5 px-3">
         <h1 className="text-center display-4 py-3">Book studio</h1>

         <hr className="w-75" />

         <form
            className="py-3 d-flex flex-column align-items-center"
            onSubmit={handleSumit}
         >
            <h2 className="py-3">Enter booking details:</h2>

            <div className="d-flex">
               <p className="h5 pr-3">Name : </p>
               <input type="text" placeholder="Name" required />
            </div>

            <div className="d-flex  mt-3">
               <p className="h5 pr-3">Email : </p>
               <input type="email" placeholder="Email" required />
            </div>

            <div className="d-flex  mt-3">
               <p className="h5 pr-3">Mobile : </p>
               <input
                  type="number"
                  maxLength="10"
                  placeholder="Mobile number"
                  required
               />
            </div>

            <div className="d-flex mt-3">
               <p className="h5 pr-3">Date : </p>
               <input type="date" min={today} required />
            </div>

            <div className="d-flex mt-3">
               <div className="pr-3">
                  <p className="h5">Time :</p>
               </div>

               <div className="d-flex flex-column">
                  <div className="form-check">
                     <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value={slot1}
                        onClick={(e) =>
                           e.target.checked ? setSlot1(true) : setSlot1(false)
                        }
                     />
                     <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                     >
                        09:00AM-12:00PM
                     </label>
                  </div>

                  <div className="form-check form-check-inline">
                     <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value={slot2}
                        onClick={(e) =>
                           e.target.checked ? setSlot2(true) : setSlot2(false)
                        }
                     />
                     <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox2"
                     >
                        01:00PM-04:00PM
                     </label>
                  </div>

                  <div className="form-check form-check-inline">
                     <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value={slot3}
                        onClick={(e) =>
                           e.target.checked ? setSlot3(true) : setSlot3(false)
                        }
                     />
                     <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox3"
                     >
                        05:00PM-08:00PM
                     </label>
                  </div>
               </div>
            </div>

            <button className="btn btn-dark my-3 px-5" type="submit">
               Book
            </button>
         </form>

         <hr className="w-75" />
      </div>
   );
}

export default Booking;
