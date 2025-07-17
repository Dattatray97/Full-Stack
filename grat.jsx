import React from "react";
import { useState } from "react";

function Myform(){
    let[name,setName]=useState("");

    let hState=(e)=>{
        e.preventDefault();
        console.log("submitted name",name);
        setName("");
    };
    return(
        <form onSubmit={hState}>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <input type="submit" value="submit" />
        </form>
    );
};
export default Myform;