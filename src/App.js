import Login from "./component/Login"
import {BrowserRouter as Router,Switch,Route,Link,Redirect,useHistory,useLocation} from "react-router-dom";
import Dashboard from './component/Dashboard';
import React, { useReducer,useState,useContext } from 'react';

const AppContext = React.createContext([{}, () => {}]);

/* const providerWrapper = (props) => {
  const [state,setState] = useState({});
  return(
    <AppContext.Provider value={[state,setState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export{AppContext, providerWrapper}; */

function App() {
  return (
   <Router>
      <div>
        <Switch>
        {/* <AppContext.Provider value={{ state, dispatch }}> */}
        {/*     <Route exact path="/"  component={() => (providerWrapper(<Login change={this.handler}/>))}/>
            <Route exact path="/Dashboard"  component={() => (providerWrapper(<Dashboard />))}/> */}
            <Route exact path="/">< Login/></Route>
            <Route exact path="/Dashboard">< Dashboard/></Route>
        {/* </AppContext.Provider> */}
        </Switch>
      </div>
  </Router>
  );
}

export default App;
