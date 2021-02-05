import NavBar from "./components/NavBar";
import Upload from "./components/Upload";

import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (

    <Router>
      <NavBar />
      <Route path="/" component={Upload}/>
    </Router>

  );
}

export default App;
