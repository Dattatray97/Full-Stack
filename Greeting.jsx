import React from "react";
const Greeting = () => {
    const hour = new Date().getHours();
    let Message;
    if (hour < 12) {
        Message = "Good Morning";

    } else if (hour < 18) {
        Message ="Good Afternoon";
    }else{
        Message = " Good Night";
    }
    return  <h2>{Message}</h2>

     }
     export default Greeting