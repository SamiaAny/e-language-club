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
import Error from './components/Error/Error';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/courses">
            <AllCourse></AllCourse>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route> 
          <Route exact path="/contact">
            <Contact></Contact>
          </Route> 
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
