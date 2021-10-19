import React from "react";

function Booking() {
   const date = new Date().toISOString().split("T")[0];
   console.log(date);
   return (
      <div>
         <h1>Booking</h1>
         <input type="date" min={date} />
      </div>
   );
}

export default Booking;
