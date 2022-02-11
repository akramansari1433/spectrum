import axios from "axios";
import React, { useState } from "react";

function UploadImage() {
   const [loading, setLoading] = useState(false);
   const [category, setCategory] = useState("wedding");
   let formData;
   const handleImageChange = (e) => {
      const image = e.target.files[0];
      formData = new FormData();
      formData.append("image", image, image.name);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      if (category === "wedding") {
         axios
            .post(
               "http://localhost:5000/spectrum-42da3/asia-south1/api/image/uploadWedding",
               formData
            )
            .then((res) => {
               if (res.data) {
                  setLoading(false);
                  console.log(res.data);
               }
            });
      }
      e.target.reset();
   };

   return (
      <div>
         <h1 className="display-4 text-center py-3">Upload Image</h1>
         <form className="mx-md-5 mx-3 px-md-5 px-3" onSubmit={handleSubmit}>
            <div className="form-group row">
               <label htmlFor="category" className="col-sm-2 col-form-label">
                  Choose category:
               </label>
               <div className="col-sm-10">
                  <select
                     className="form-control"
                     id="category"
                     name="choose"
                     onChange={(e) => setCategory(e.target.value)}
                  >
                     <option disabled>Choose category</option>
                     <option>wedding</option>
                     <option>fashion&portrait</option>
                     <option>baby</option>
                     <option>product</option>
                  </select>
               </div>
            </div>
            <div className="form-group row">
               <label htmlFor="category" className="col-sm-2 col-form-label">
                  Choose image:
               </label>
               <div className="col-sm-10">
                  <input
                     type="file"
                     className="form-control-file"
                     id="image"
                     onChange={handleImageChange}
                  />
               </div>
            </div>
            <div className="text-center">
               <button
                  className="btn btn-dark my-3"
                  type="submit"
                  disabled={loading}
               >
                  Upload
               </button>
            </div>
         </form>
      </div>
   );
}

export default UploadImage;
