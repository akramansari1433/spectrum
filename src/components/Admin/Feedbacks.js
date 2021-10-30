import React from "react";

function Feedbacks() {
   return (
      <div>
         <h1 className="display-4 text-center py-3">Feedbacks</h1>
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th scope="col">Feedback</th>
                  <th scope="col">Name</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Good studio with skilled photographers</td>
                  <td>Mark</td>
               </tr>
               <tr>
                  <td>Good studio with skilled photographers</td>
                  <td>Mark</td>
               </tr>
               <tr>
                  <td>Good studio with skilled photographers</td>
                  <td>Mark</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
}

export default Feedbacks;
