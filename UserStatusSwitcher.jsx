import React from "react";
import { useState } from "react";

function UserStatusSwitcher()
{
  const [userStatus,setuserStatus]=useState(false);
  let change=()=>{
    setuserStatus(true)

  }
  return(
    <div>
      <h2>User Status </h2>
      {
        !userStatus?(<h3 className="on">Online</h3>):(<h3 className="off">Offline</h3>)
      }
      <button onClick={change}>Go Offline</button>
    </div>
  )
}
export default UserStatusSwitcher;