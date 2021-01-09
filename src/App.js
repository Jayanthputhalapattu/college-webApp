import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navba from './layouts/Navbar';
import firebase from "firebase/app"
import MainHomePage from './Components/MainHomePage';
import TEQIP from './Components/NavbarElements/TEQIP';
import Cse from './Components/Departments/Cse.js';

import firebaseConfig from "./config/firebaseConfig"
firebase.initializeApp(firebaseConfig)
function App() {
  
  return (
    <Router>
    <Navba/>
      <Switch>
          <Route exact path="/" component={MainHomePage} />
          <Route  path="/teqip" component={TEQIP} />
          <Route path="/cse" component={Cse}/>
      </Switch>
     
</Router>
  )
}

export default App;
