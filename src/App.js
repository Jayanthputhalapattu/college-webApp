import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navba from './layouts/Navbar';
import firebase from "firebase/app"
import MainHomePage from './Components/MainHomePage';
import TEQIP from './Components/NavbarElements/TEQIP';
import Cse from './Components/Departments/Cse.js';

import firebaseConfig from "./config/firebaseConfig"
import NEWS from './Components/NavbarElements/NEWS';
import Login from './Components/Login/Login';
// import Ece from './Components/Departments/Ece';
// import Che from './Components/Departments/Che';
// import CE from './Components/Departments/CE';
// import Me from './Components/Departments/Me';
// import EEE from './Components/Departments/EEE';
firebase.initializeApp(firebaseConfig)
function App() {
  
  return (
    <Router>
    <Navba/>
      {/* <Switch> */}
          <Route exact path="/" component={MainHomePage} />
          <Route  path="/teqip" component={TEQIP} />
          <Route path="/CSE" component={Cse}/>
          {/* <Route path ="/ECE" component={Ece}/> */}
          {/* <Route path ="/ChE" component={Che}/> */}
          {/* <Route path ="/CE" component={CE}/> */}
          {/* <Route path ="/ME" component={Me}/> */}
          {/* <Route path ="/EEE" component={EEE}/> */}
          <Route path="/news" component={NEWS}/>
          <Route path="/login" component={Login} />
      {/* </Switch> */}
     
</Router>
  )
}

export default App;
