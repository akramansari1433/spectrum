import React from "react";

function StudioBookings() {
   return (
      <div>
         <h1 className="display-4 text-center py-3">Bookings</h1>
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>12/11/2021</td>
                  <td>12:00PM-4:00PM</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
               </tr>
               <tr>
                  <td>12/11/2021</td>
                  <td>12:00PM-4:00PM</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
               </tr>
               <tr>
                  <td>12/11/2021</td>
                  <td>12:00PM-4:00PM</td>
                  <td>Larryefewweererwer</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default StudioBookings;
