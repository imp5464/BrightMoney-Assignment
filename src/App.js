import React  from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Navi from "./Navbar";
import Add from "./add";
import Show from "./show"
import MonthlyBudget from "./MonthlyBudget";



function App() {
  return (
    
    <Router>
    <div className="App">
      <Navi></Navi>
      <Switch>
        <Route exact path='/show' component={Show}/>
        <Route path='/add' component={Add}/> 
        <Route path='/MonthlyBudget' component={MonthlyBudget}/> 
       
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
