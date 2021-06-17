//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Button from "@material-ui/core/Button";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory,} from "react-router";
//const arayee=[{id:"",taskname: "",task:"",sd:"",ed:""}]
const Createtask32=()=>{
const [tasktitle,settasktitle]=useState("");
const [desscrption,setdesscrption]=useState("");
const [sd,setsd]=useState("");
const [ed,seted]=useState("");
//const [listclick,updatelistclick]=useState([{taskname: "d",task:"f",sd:"g",ed:"g"}]);
const s = "TASK HAS CREATED..."
const history= useHistory();



// const clickinput=(event)=>{
//     updatelistclick((arrayvalue)=>{ 
//         return [...arrayvalue,tasktitle.id,desscrption.taskname,]
//     });
//     //console.log(listclick);
//     updatelist("");

// }
// const clickinput=(event)=>{
//     updatelistclick((arrayvalue)=>{ return ([...arrayvalue,tasktitle,task,sd,ed])})
//     console.log(listclick);
//     //(tasktitle===""||desscrption===""||sd===""||ed==="")? alert("Please enter full  data")   :alert(s+"\n TASK--"+tasktitle+"\n DESCRPTION--"+desscrption+"\n START DATE--"+sd+"\n END DATE--"+ed)
//     settasktitle(""); 
//     setdesscrption("");
//     setsd("");
//     seted(""); 
   
    

// }



//const [desscrption,setdesscrption]=useState("");
return ( 
 <>



<NavLink exact activeClassName="active_class" to="/edittask"> EDITTASK </NavLink> 
{/* <h1 className="text-center text-capitalize mt-1 text-danger">CREATE TASK </h1>
{/* <Button className="button1" >CREATE TASK</Button> */}
<div className="main_div">
<div className="center_div">
<br/>
<h1 className="h1teg">Create Task</h1>

<br/>
    <input className="inputfield" type="text" name="tasktitle" id="tasktitle" autoComplete="off" 
    placeholder="Task Title" value={tasktitle} onChange={(e)=>settasktitle(e.target.value)}></input>
    {/* {(tasktitle==="i"? <Createtask32/>:null)} */}
    
    
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
    <button className="button1" type="submit" onClick={()=>{settasktitle(""); setdesscrption("");setsd("");seted(""); ((tasktitle===""||desscrption===""||sd===""||ed==="")? alert("Please enter full  data")   :alert(s+"\n TASK--"+tasktitle+"\n DESCRPTION--"+desscrption+"\n START DATE--"+sd+"\n END DATE--"+ed))}}>SUBMIT</button></div></div>
    <button onClick={()=>history.push('/')}>Home</button>
</>
 );
 };export default Createtask32;

 

 
 
 

 
 