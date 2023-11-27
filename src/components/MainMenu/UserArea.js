import "react-material-symbols/dist/rounded.css";
import { MaterialSymbol } from "react-material-symbols";
import { Tooltip } from "react-tooltip";
import React, { useState } from "react";
import NotificationButton from "./MenuToggle/NotificationButton";



  const UserArea = ({ user }) => (
    <div className="AreaMenu UserArea">
      <a className="UserAreaIcon" data-tooltip-id="my-tooltip" data-tooltip-content="Crear">
        <a href="#" className="Icon">
          <MaterialSymbol icon="video_call" size={26} weight={200} grade={-25} />
        </a>
      </a>
      <Tooltip id="my-tooltip" />
      <NotificationButton/>
    <div className="UserAvatar">
          <p className="InitialUser">C</p>
      </div>
      
     
    </div>
  );


export default UserArea;
