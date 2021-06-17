import React, {  useState } from "react";

const taskdata = [{id:1,taskname: "Tample",task:"search No of temple in ur area",sd:"16/06/2021",ed:"17/06/2021"},{id:2,taskname: "Make beds",task:"make your bedswith wash",sd:"16/06/2021",ed:"17/06/2021"},{id:3,taskname: "Brush",task:"brush your teeth",sd:"16/06/2021",ed:"17/06/2021"},
{id:4,taskname: "Wash",task:"wash your face with hand",sd:"16/06/2021",ed:"17/06/2021"},{id:5,taskname: "Dressed",task:"ready your dress and clean",sd:"16/06/2021",ed:"17/06/2021"}]

const Viewtask32=()=>{
     const [valuee,setvaluee]=useState(taskdata);
     const[tasksearch,settasksearch]=useState("");
     
     const inputevent=(inputvalue)=>{
        settasksearch(inputvalue.target.value);
    
     }

     const removeelement=(id)=>{
       const newarray=valuee.filter((currentele)=>{
           return currentele.id!==id;
       })
       setvaluee(newarray);
    }
// {JSONDATA.filter}
// {valuee.filter((currentele)=>{
//     return currentele.id!==id;
// })}
return ( 
      <>
<br/>
<br/>
<div className="col-sm-6 offset-sm-5">
 <input className="form-cotrol" type="text" placeholder="search task" onChange={inputevent} />
 </div>
 {(tasksearch==="")?
 valuee.map((currentkey,index)=>{return (
    <>
    <div className= "cards" id={index} key={index}>
    <div className= "cards1">
    <div className= "card_info" id={index} key={index}>
    <span className= "card_category"  >{currentkey.taskname}</span>
    <h3 className= "card_title" >{currentkey.task}</h3>
    <p className= "card_title" >{currentkey.sd}</p><p  className= "card_title" >{currentkey.ed}</p>
    <button className="button1" onClick={()=>removeelement(currentkey.id)} >Delete task</button>
    </div>
    </div>
    </div>
    </>)
    }
    ):null}


    
    
 







</>
  )
  };export default Viewtask32;;
 

 
 