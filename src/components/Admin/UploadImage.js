import React from "react";

function UploadImage() {
   return (
      <div>
         <h1 className="display-4 text-center py-3">Upload Image</h1>
         <form className="mx-md-5 mx-3 px-md-5 px-3">
            <div className="form-group row">
               <label htmlFor="category" className="col-sm-2 col-form-label">
                  Choose category:
               </label>
               <div className="col-sm-10">
                  <select
                     className="form-control"
                     id="category"
                     onChange={(e) => console.log(e.target.value)}
                  >
                     <option>Weddings</option>
                     <option>Fashion & Portrait</option>
                     <option>Baby</option>
                     <option>Products</option>
                  </select>
               </div>
            </div>
            <div className="form-group row">
               <label htmlFor="category" className="col-sm-2 col-form-label">
                  Choose image:
               </label>
               <div className="col-sm-10">
                  <input type="file" className="form-control-file" id="image" />
               </div>
            </div>
            <div className="text-center">
               <button className="btn btn-dark my-3" type="submit">
                  Upload
               </button>
            </div>
         </form>
      </div>
   );
}

export default UploadImage;
