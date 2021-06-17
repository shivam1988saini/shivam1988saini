import React, {  useEffect, useState } from "react";
//import axios from 'axios';
import './index1.css'

 const Jokespot32=()=>{
     const [valuee,setvaluee]=useState([]);
    // const [valuee1,setvaluee1]=useState();
     async function Apicall(){
       // const res=await axios.get('https://official-joke-api.appspot.com/jokes/ten');
        const res1 = await fetch('https://official-joke-api.appspot.com/jokes/ten');
       setvaluee(await res1.json());
       
       // setvaluee1(res.data.length);
    }
 useEffect(()=>{
     Apicall();
 },[]);


 return ( 
      <>
{(valuee.length===10)?(valuee.map((currentkey,index)=>{return (<><div className= "cards" >
<div className= "cards1" >
    <div className= "card_info">
    <span className= "card_category"  >{currentkey.punchline}</span>
    <h3 key={currentkey.id} className= "card_title"  >{currentkey.setup} </h3>
    </div>
</div>
</div></>)})):<div className="divload"  ><img src= "g.gif" alt=""></img></div>}







</>
  )
  };export default Jokespot32;
 

 
 