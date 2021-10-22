import React from "react";

function Login({ setAdmin }) {
   const handleSumit = () => {
      setAdmin(true);
   };
   return (
      <div>
         <h1 className="text-center display-4 py-3">Admin Login</h1>
         <form className="text-center" onSubmit={handleSumit}>
            <input
               type="text"
               placeholder="Username"
               className="mt-3 h4 p-2"
               required
            />
            <br />
            <input
               type="password"
               placeholder="Password"
               className="mt-3 h4 p-2"
               required
            />
            <br />
            <button type="submit" className="btn btn-dark mt-3 px-3">
               Login
            </button>
         </form>
      </div>
   );
}

export default Login;
