import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Porfolio';
import About from './components/About/About'
import Wedding from './components/Wedding/Wedding'

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
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/porfolio/wedding">
            <Wedding/>
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
