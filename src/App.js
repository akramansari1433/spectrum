import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Porfolio';
import About from './components/About/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Cover/>
          </Route>
          <Route path="/spectrum">
            <Cover/>
          </Route>
          <Route path="/porfolio">
            <Portfolio/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
      </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
