import React, { Component } from "react";

export default class ReportsRentals extends Component {
   render() {
      const data = this.props.data;
      return (
         <div className="mx-3 my-3">
            <h3 className="text-center mb-3">Rental Details</h3>
            <table className="table table-bordered">
               <thead>
                  <tr>
                     <th scope="col">Date</th>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Phone</th>
                     <th scope="col">Product</th>
                     <th scope="col">Days</th>
                     <th scope="col">PaymentId</th>
                     <th scope="col">Amount Paid</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((r) => (
                     <tr key={r.rentId}>
                        <td>{r.date}</td>
                        <td>{r.name}</td>
                        <td>{r.email}</td>
                        <td>{r.phone}</td>
                        <td>{r.product}</td>
                        <td>{r.days}</td>
                        <td>{r.paymentId}</td>
                        <td>{r.amount}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      );
   }
}
