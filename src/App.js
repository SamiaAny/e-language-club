import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import AllCourse from './components/All Courses/AllCourse';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <AllCourse></AllCourse>
          </Route>
          <Route path="/about">
            <About></About>
          </Route> 
          <Route path="/contact">
            <Contact></Contact>
          </Route> 
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
