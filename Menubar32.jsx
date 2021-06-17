import React from "react";

import { NavLink } from "react-router-dom";


const Menubar32=()=>{
 return ( 
 <>
 <div >
 <NavLink exact activeClassName="active_class" to="/">LOGIN </NavLink>

 
 {/* <NavLink exact activeClassName="active_class" to="/"> CREATE TASK </NavLink>
 <NavLink exact activeClassName="active_class" to="/"> EDITTASK </NavLink> */}
 <NavLink exact activeClassName="active_class" to="/viewtask"> VIEWTASK </NavLink>
 <NavLink exact activeClassName="active_class" to="/"> CREATE TASK </NavLink>
 <NavLink exact activeClassName="active_class" to="/jokespot"> JOKESPOT </NavLink>
 <NavLink exact activeClassName="active_class" to="/"> EDITTASK </NavLink>
 <NavLink exact activeClassName="active_class" to="/viewtask"> SEARCH </NavLink>
 </div>
 
 
 
 </>
 );
 };export default Menubar32;

 

 
 