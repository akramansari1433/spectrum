import React, { Component } from "react";

export default class ReportsStudio extends Component {
   render() {
      const data = this.props.data;
      return (
         <div className="mx-3 my-3">
            <h3 className="text-center mb-3">Studio Booking Details</h3>
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th scope="col">Date</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Phone</th>
                     <th scope="col">PaymentId</th>
                     <th scope="col">Amount Paid</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((p) => (
                     <tr key={p.bookingId}>
                        <td>{p.date}</td>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                        <td>{p.paymentId}</td>
                        <td>{p.amount}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      );
   }
}
