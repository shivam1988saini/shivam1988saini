
import React from "react";
import { Route,Switch } from "react-router-dom";
import Edittask32 from "./Edittask32";
import Createtask32 from "./Createtask32";
import Login32 from "./Login32";
import Error32 from "./Error32";
import Menubar32 from "./Menubar32";
import Viewtask32 from "./Viewtask32";
import Jokespot32 from "./Jokespot32";





const App32=()=>{
    

 return ( 
 <>
<Menubar32/>
<Switch>


<Route exact path='/' component={()=><Login32 />}/>
<Route path='/login' component={()=><Login32 />} />
<Route path='/edittask' render={()=><Edittask32/>}/>
<Route exact path='/viewtask' component={()=><Viewtask32 name="services1" />}/>
<Route exact path='/createtask' render={()=><Createtask32/>}/>
<Route  path='/jokespot' component={Jokespot32}/>
<Route  path='/search' component={Viewtask32}/>
<Route  component={()=><Error32/>}/>
</Switch>

 </>
 );
 };export default App32;

 

 
 