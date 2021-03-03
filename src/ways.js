import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './homepage';
import Item from './itemlist';
import View from './viewlist';






const Ways  =()=>{
    return(
<>

<Router>
<Switch>

<Route exact path="/">

<Home/>

</Route>  

 
  <Route exact path="/items">

<Item/>

</Route>

<Route exact path="/view">

<View/>

</Route>

</Switch>
  
     
     
     




</Router>
</>

    )
}





export default Ways;