
import React,{useState } from "react";

function Newsletter() 
{
    const[userName,setuserName]=useState("");
    const[userEmail,setuserEmail]=useState("");
    const[userSubmit,setuserSubmit]=useState(false);

    let Handler=(e)=>{
        e.preventDefault();
        setuserSubmit(true);
    }
    return(
        <div className="box">
            {!userSubmit?(
                <form onSubmit={Handler} className="form">
                    <input type="text" value={userName}
                    placeholder="Enter your name" onChange={(e)=>setuserName(e.target.value)}/>
                        <input type="email" value={userEmail} 
                        placeholder="Enter your Email" onChange={(e)=>setuserEmail(e.target.value)}/>
                    <button type="submit">Subscribe</button>
                </form>
            ):(
                <h2>Thank you for your submission {userName}</h2>
            )}
        </div>
    );
}

export default Newsletter;