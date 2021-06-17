import React from "react";
import { useState } from "react";
import Createtask32 from "./Createtask32";
//import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
const Login32=()=>{
const [email,setemail]=useState("");
const [password,setpassword]=useState("");
//  const submitform=(e)=>{
    
//     console.log(email);
//     console.log(password);
//    // return((email==="rahul@gmail.com")?<Createtask32/>:<Createtask32/> )
//  }

 return ( 
 <>




<div className="main_div">
<div className="center_div">
<br/>
<h1 className="h1teg">Login Form</h1>
<br/>


<br/>
<br/>
    <input className="inputfield" type="text" name="email" id="email" autoComplete="off" 
    placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
    {/* {(email==="i"? <Createtask32/>:null)} */}
    
    
    <br/><br/>
    <input className="inputfield"  type="text" name="password" id="password" autoComplete="off" 
    placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
    <br/><br/><br/><br/><br/>
    <button className="button1" type="submit" onClick={()=>{setemail(""); setpassword("");((email==="shivam"&&password==="1234")? 
    ReactDOM.render(
    <>
    <BrowserRouter>
    <Createtask32/>
    </BrowserRouter>
    </>,document.getElementById("root")):alert("Please enter full data"))}}>LOGIN</button></div></div>





 </>
 );
 };export default Login32;

 

 
 