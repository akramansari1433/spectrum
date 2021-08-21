import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cover from './components/Cover/Cover'
import Footer from './components/Footer/Footer';
import Albums from './components/Albums/Albums'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'>
            <Cover/>
          </Route>
          <Route path='/albums'>
            <Albums/>
          </Route>
      </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
