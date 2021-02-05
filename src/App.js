import NavBar from "./components/NavBar";
import Upload from "./components/Upload";
import Emotions from "./components/Emotions";

import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (

    <Router>
      <NavBar />
      <Route path="/" component={Upload} exact />
      <Route path="/emotions" component={Emotions} />
    </Router>

  );
}

export default App;
