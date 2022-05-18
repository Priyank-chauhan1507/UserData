
import Nav from './components/Nav'


import {BrowserRouter as Router,
  Switch,
   Route,
  } from "react-router-dom" ; 

import PersonCard from './components/PersonCard';



const App = () =>
{
  return (
    <>
    <Router>   
  <div className=" py-4 bg-[#F0F0F0]">
  <Nav/>
  
  <div className="my-[2%]"> <PersonCard/></div>
 
  
  <Switch>
    <Route exact path="/product" ></Route>
    <Route  exact path="/downloads"></Route>
    <Route  exact path="/pricing" ></Route>
    
  </Switch>
</div>
</Router> 
    </>
  )
}

export default App
