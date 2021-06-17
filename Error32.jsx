import React from "react";
import { useHistory } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Error32=()=>{
    const history= useHistory();
 return ( 
 <>
<h1 className="text-center text-capitalize mt-5 text-danger" > 404 ERROR PAGE NOT FOUND </h1>

<div className="divload">
 <button className="button1" onClick={()=>history.goBack()}>GO BACK</button>
 <button className="button1" onClick={()=>history.push('/')}>Home</button>
 </div>
 </>
 );
 };export default Error32;

 

 
 