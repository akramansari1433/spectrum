import React from "react";

function Feedback() {
   return (
      <div>
         <h1 className="text-center display-4 py-3">Feedbacks</h1>
         <div
            id="carouselExampleControls"
            className="carousel slide p-2"
            data-ride="carousel"
         >
            <div className="carousel-inner bg-secondary text-white py-3">
               <div className="carousel-item active text-center px-3">
                  <i className="h4 text-center">
                     "Best Studio and high skilled photographers"
                  </i>
                  <br />
                  <p className="lead">by Akram</p>
               </div>
               <div className="carousel-item text-center">
                  <i className="h4 text-center">"Best in class"</i>
                  <br />
                  <p className="lead">by john</p>
               </div>
               <div className="carousel-item text-center">
                  <i className="h4 text-center">"Best in class"</i>
                  <br />
                  <p className="lead">by john</p>
               </div>
            </div>
            <a
               className="carousel-control-prev"
               href="#carouselExampleControls"
               role="button"
               data-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Previous</span>
            </a>
            <a
               className="carousel-control-next"
               href="#carouselExampleControls"
               role="button"
               data-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="sr-only">Next</span>
            </a>
         </div>

         <hr className="w-75" />

         <form className="text-center py-3 mt-3 border-dark mx-md-5 mx-3">
            <h2 className="">Give your feedback</h2>
            <textarea
               rows="3"
               placeholder="Your feedback"
               className=" h5 mt-2"
               required
            />
            <br />
            <input
               type="text"
               placeholder="Your name"
               className="h5 mt-2"
               required
            />
            <br />
            <button className="btn btn-danger my-3" type="submit">
               Submit
            </button>
         </form>

         <hr className="w-75" />
      </div>
   );
}

export default Feedback;
