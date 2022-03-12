import React, { Component } from "react";

export default class ReportPhotoshoot extends Component {
   render() {
      const data = this.props.data;
      return (
         <div className="mx-3 my-3">
            <h3 className="text-center mb-3">Photoshoots Details</h3>
            <table className="table table-bordered">
               <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Category</th>
                  <th scope="col">PaymentId</th>
                  <th scope="col">Amount Paid</th>
               </tr>
               {data.map((p) => (
                  <tr key={p.adop_id}>
                     <td>{p.date}</td>
                     <td>{p.name}</td>
                     <td>{p.email}</td>
                     <td>{p.phone}</td>
                     <td>{p.category}</td>
                     <td>{p.paymentId}</td>
                     <td>{p.amount}</td>
                  </tr>
               ))}
            </table>
         </div>
      );
   }
}
