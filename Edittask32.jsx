import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Edittask32=()=>{
const [tasktitle,settasktitle]=useState("");
const [desscrption,setdesscrption]=useState("");
const [sd,setsd]=useState("");
const [ed,seted]=useState("");
const s = "TASK HAS UPDATED..."





return ( 
 <>

<NavLink to="/createtask"> CREATE TASK </NavLink>

<div className="main_div">
<div className="center_div">
<br/>
<h1 className="h1teg">UPDATE TASK</h1>

<br/>
    <input className="inputfield" type="text" name="tasktitle" id="tasktitle" autoComplete="off" 
    placeholder="Task Title" value={tasktitle} onChange={(e)=>settasktitle(e.target.value)}></input>
    
    
    <br/><br/>
    <input className="inputfield"  type="text" name="desscrption" id="desscrption" autoComplete="off" 
    placeholder="Task Description" value={desscrption} onChange={(e)=>setdesscrption(e.target.value)}></input>
    <br/><br/>
    <input className="inputfield"  type="text" name="sd" id="sd" autoComplete="off" 
    placeholder="Startdate" value={sd} onChange={(e)=>setsd(e.target.value)}></input>
    <br/><br/>
    <input className="inputfield"  type="text" name="ed" id="ed" autoComplete="off" 
    placeholder="Enddate" value={ed} onChange={(e)=>seted(e.target.value)}></input>
    <br/><br/><br/>
    <button className="button1" type="submit" onClick={()=>{settasktitle(""); setdesscrption("");setsd("");seted(""); ((tasktitle===""||desscrption===""||sd===""||ed==="")? alert("Please enter full  data")   :alert(s+"\n TASK--"+tasktitle+"\n DESCRPTION--"+desscrption+"\n START DATE--"+sd+"\n END DATE--"+ed))}}>UPDATE</button></div></div>

</>
 );
 };export default Edittask32;

 

 
 
 

 
 

 
 