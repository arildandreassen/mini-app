import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Puppies from "./component/Puppies";
import Calculator from "./component/Calculator";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Happy Tails Shelter</h1>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Puppies />
          </Route>
          <Route exact path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
