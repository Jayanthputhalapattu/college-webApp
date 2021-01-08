import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Navba from './layouts/Navbar';

import MainHomePage from './Components/MainHomePage';
import TEQIP from './Components/NavbarElements/TEQIP';

function App() {
  return (
    <Router>
    <Navba/>
      <Switch>
          <Route exact path="/" component={MainHomePage} />
          <Route  path="/teqip" component={TEQIP} />
      </Switch>
     
</Router>
  )
}

export default App;
