import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cover from "./components/Cover/Cover";
import Wedding from "./components/Wedding/Wedding";
import Booking from "./components/Booking/Booking";
import Feedback from "./components/Feedback/Feedback";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./components/Admin/Login";
import Bookings from "./components/Admin/Bookings";
import Feedbacks from "./components/Admin/Feedbacks";
import UploadImage from "./components/Admin/UploadImage";
import "./App.css";
import { useState } from "react";

function App() {
   const [isAdmin, setAdmin] = useState(false);

   return (
      <Router>
         <Navbar isAdmin={isAdmin} setAdmin={setAdmin} />
         <Switch>
            <Route exact path="/" component={Cover} />
            <Route path="/spectrum" component={Cover} />
            <Route path="/porfolio/wedding" component={Wedding} />
            <Route path="/booking" component={Booking} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/about" component={About} />
            <Route exact path="/admin">
               {isAdmin ? (
                  <h1 className="display-4 text-center py-5">
                     Welcome to admin dashboard
                  </h1>
               ) : (
                  <Login setAdmin={setAdmin} />
               )}
            </Route>
            <Route path="/admin/bookings">
               {isAdmin ? <Bookings /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/feedbacks">
               {isAdmin ? <Feedbacks /> : <Login setAdmin={setAdmin} />}
            </Route>
            <Route path="/admin/uploadimage">
               {isAdmin ? <UploadImage /> : <Login setAdmin={setAdmin} />}
            </Route>
         </Switch>
         <Footer isAdmin={isAdmin} />
      </Router>
   );
}

export default App;
